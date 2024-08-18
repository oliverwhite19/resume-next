import dynamic from 'next/dynamic';
import { Education } from '../components/Education/Education';
import { Header } from '../components/Header/Header';
import { WorkExperience } from '../components/WorkExperience/WorkExperience';
import { useStyles } from '../styles/index.styles';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { parse } from 'yaml';
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
  const { classes } = useStyles();
  return (
    <>
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

export async function getStaticProps() {
  const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  });

  console.log(process.env);

  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: process.env.CONFIG_KEY,
  };

  const command = new GetObjectCommand(params);
  const response = await s3.send(command);

  return {
    props: parse((await response.Body?.transformToString()) ?? ''),
    revalidate: 60,
  };
}

export default dynamic(() => Promise.resolve(Resume), {
  ssr: false,
});
