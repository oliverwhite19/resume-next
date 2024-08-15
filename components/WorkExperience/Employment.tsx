import { Button, Group, Input, Space, Textarea } from '@mantine/core';
import { EmploymentWithPositions } from '../../types';
import { useState } from 'react';

const Employment = ({
  employment,
}: {
  employment?: EmploymentWithPositions;
}) => {
  const { company, descriptor, companyLink } = employment ?? {};

  const [companyName, setCompanyName] = useState(company);
  const [link, setLink] = useState(companyLink);
  const [companyDescriptor, setCompanyDescriptor] = useState(descriptor);
  const saveCompany = async () => {
    await fetch('/api/employment/updateOrCreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: employment?.id,
        name: companyName,
        link,
        descriptor: companyDescriptor,
      }),
    });
  };

  return (
    <div>
      <Input.Wrapper label="Company name">
        <Input
          placeholder="Company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </Input.Wrapper>
      <Space h="md" />
      <Input.Wrapper label="Description">
        <Textarea
          placeholder="Description"
          value={companyDescriptor}
          onChange={(e) => setCompanyDescriptor(e.target.value)}
        />
      </Input.Wrapper>
      <Space h="md" />

      <Input.Wrapper label="Company link">
        <Input
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </Input.Wrapper>
      <Space h="md" />
      <Group>
        <Button color="red" onClick={saveCompany}>
          Delete
        </Button>
        <Button onClick={saveCompany}>Save</Button>
      </Group>
    </div>
  );
};

export default Employment;
