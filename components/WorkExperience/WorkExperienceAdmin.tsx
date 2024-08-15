import { Button, Divider, Space } from '@mantine/core';
import { EmploymentWithPositions } from '../../types';
import Employment from './Employment';
import { IconPlus } from '@tabler/icons-react';
import { Fragment, useState } from 'react';

const WorkExperienceAdmin = ({
  employment,
}: {
  employment: EmploymentWithPositions[];
}) => {
  const [managedEmployments, setManagedEmployments] = useState(employment);

  const addEmployment = () => {
    setManagedEmployments([...managedEmployments, {}]);
  };

  const deleteEmployment = (index: number) => async (id: string) => {
    if (id) {
      await fetch('/api/employment/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      });
    }
    setManagedEmployments(managedEmployments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Space h="md" />
      {managedEmployments?.map((company, index) => (
        <Fragment key={`${index}${company?.id ?? ''}`}>
          <Employment employment={company} remove={deleteEmployment(index)} />
          <Divider my="md" />
        </Fragment>
      ))}
      <Space h="md" />
      <Button variant="default" onClick={addEmployment}>
        <IconPlus size={18} stroke={1.5} />
      </Button>
    </div>
  );
};

export default WorkExperienceAdmin;
