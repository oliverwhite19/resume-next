import withAdminAuthRequired from '../components/WithAdminAuthRequired/withAdminAuthRequired';
import dynamic from 'next/dynamic';

import { EmploymentWithPositions } from '../types';
import {
  PrismaClient,
  type Education as EducationType,
} from '../prisma/generated/client';
import { Tabs } from '@mantine/core';
import WorkExperienceAdmin from '../components/WorkExperience/WorkExperienceAdmin';

const Administration = ({
  employment,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  education,
}: {
  employment: EmploymentWithPositions[];
  education: EducationType[];
}) => {
  return (
    <Tabs defaultValue="employment">
      <Tabs.List>
        <Tabs.Tab value="employment">Employment</Tabs.Tab>
        <Tabs.Tab value="education">Education</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="employment">
        <WorkExperienceAdmin employment={employment} />
      </Tabs.Panel>
      <Tabs.Panel value="education">Messages tab content</Tabs.Panel>
    </Tabs>
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

export default dynamic(
  () => Promise.resolve(withAdminAuthRequired(Administration)),
  {
    ssr: false,
  },
);
