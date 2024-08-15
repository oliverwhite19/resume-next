import {
  Alert,
  Button,
  Group,
  Input,
  NumberInput,
  Space,
  Textarea,
} from '@mantine/core';
import { EmploymentWithPositions } from '../../types';
import { useState } from 'react';

const Employment = ({
  employment,
  remove,
}: {
  employment?: EmploymentWithPositions;
  remove: (id: string) => void;
}) => {
  const {
    company,
    descriptor,
    companyLink,
    index: position,
  } = employment ?? {};

  // Alert management
  const [alert, setAlert] = useState(false);

  // Form management
  const [companyName, setCompanyName] = useState(company);
  const [link, setLink] = useState(companyLink);
  const [companyDescriptor, setCompanyDescriptor] = useState(descriptor);
  const [companyPosition, setCompanyPosition] = useState(position);

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
        index: companyPosition,
      }),
    });
  };

  const deleteCompany = async () => {
    await remove(employment?.id);
    setAlert(false);
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
      <NumberInput
        label="Resume position"
        placeholder="Position"
        value={companyPosition}
        onChange={(value) => setCompanyPosition(value)}
        min={0}
      />
      <Space h="md" />
      <Group>
        <Button color="red" onClick={() => setAlert(true)}>
          Delete
        </Button>
        <Button onClick={saveCompany}>Save</Button>
      </Group>
      {alert && (
        <>
          <Space h="md" />
          <Alert
            variant="filled"
            color="gray"
            title="Are you sure you want to delete this job?"
          >
            <Group>
              <Button color="red" onClick={deleteCompany}>
                Confirm
              </Button>
              <Button onClick={() => setAlert(false)}>Cancel</Button>
            </Group>
          </Alert>
        </>
      )}
    </div>
  );
};

export default Employment;
