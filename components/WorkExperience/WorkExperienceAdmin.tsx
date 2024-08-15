import { Divider, Space } from '@mantine/core';
import { EmploymentWithPositions } from '../../types';
import Employment from './Employment';

const WorkExperienceAdmin = ({
  employment,
}: {
  employment: EmploymentWithPositions[];
}) => {
  return (
    <div>
      <Space h="md" />
      {employment?.map((company, index) => (
        <>
          <Employment key={index} employment={company} />

          {index < employment.length - 1 && <Divider my="md" />}
        </>
      ))}
    </div>
  );
};

export default WorkExperienceAdmin;
