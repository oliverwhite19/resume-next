import { readFileSync } from 'fs';
import Head from 'next/head';
import { resolve } from 'path';
import { Education } from '../components/Education/Education';
import { Header } from '../components/Header/Header';
import { WorkExperience } from '../components/WorkExperience/WorkExperience';
import classes from '../styles/index.module.css';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { parse } from 'yaml';
import { env } from '../lib/env';
import { siteUrl } from '../lib/site';
import type { Resume } from '../types';

const Resume = ({
  name,
  email,
  github,
  linkedin,
  description,
  employers,
  education,
}: Resume) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    email,
    url: siteUrl,
    sameAs: [github, linkedin],
    description,
    image: `${siteUrl}/images/author_.jpg`,
    worksFor: employers.map((employer) => ({
      '@type': 'Organization',
      name: employer.name,
      url: employer.url,
    })),
    alumniOf: education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.school,
      url: edu.url,
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Header
        withDescription
        name={name}
        email={email}
        github={github}
        linkedin={linkedin}
        description={description}
      />
      <section className={classes.section}>
        <WorkExperience employment={employers} />
      </section>
      <section className={classes.section}>
        <Education education={education} />
      </section>
    </>
  );
};

const loadLocalResume = () => {
  const filePath = resolve(process.cwd(), 'data', 'resume.yml');
  return parse(readFileSync(filePath, 'utf-8'));
};

const loadS3Resume = async () => {
  const s3 = new S3Client({
    region: env.AWS_REGION,
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY as string,
    },
  });

  const command = new GetObjectCommand({
    Bucket: env.AWS_BUCKET,
    Key: env.CONFIG_KEY,
  });

  const response = await s3.send(command);
  return parse((await response.Body?.transformToString()) ?? '');
};

export async function getStaticProps() {
  const hasS3Config =
    env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY && env.AWS_BUCKET;

  if (!hasS3Config) {
    if (env.isProduction) {
      throw new Error(
        'Missing S3 configuration. AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_BUCKET are required in production.',
      );
    }
    return {
      props: loadLocalResume(),
      revalidate: 60,
    };
  }

  try {
    return {
      props: await loadS3Resume(),
      revalidate: 60,
    };
  } catch (error) {
    if (env.isProduction) {
      throw error;
    }
    console.warn('Failed to load resume from S3, falling back to local file:', error);
    return {
      props: loadLocalResume(),
      revalidate: 60,
    };
  }
}

export default Resume;
