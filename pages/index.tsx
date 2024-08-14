import dynamic from 'next/dynamic';
import { Education } from '../components/Education/Education';
import { Header } from '../components/Header/Header';
import { WorkExperience } from '../components/WorkExperience/WorkExperience';
import type { Education as EducationType } from '../prisma/generated/client';
import { PrismaClient } from '../prisma/generated/client';
import { useStyles } from '../styles/index.styles';
import { EmploymentWithPositions } from '../types';

const Resume = ({
  employment,
  education,
}: {
  employment: EmploymentWithPositions[];
  education: EducationType[];
}) => {
  const { classes } = useStyles();
  return (
    <>
      <Header withDescription />
      <section className={classes.section}>
        <WorkExperience employment={employment} />
      </section>
      <section className={classes.section}>
        <Education education={education} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const employmentData = await prisma.employment.findMany({
    include: { positions: true },
    orderBy: { index: 'asc' },
  });
  const educationData = await prisma.education.findMany();
  return {
    props: {
      employment: employmentData,
      education: educationData,
    },
    revalidate: 60,
  };
}

export default dynamic(() => Promise.resolve(Resume), {
  ssr: false,
});
