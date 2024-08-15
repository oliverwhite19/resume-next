import {
  Button,
  Group,
  Input,
  Modal,
  NumberInput,
  Space,
  Textarea,
} from '@mantine/core';
import { EmploymentWithPositions } from '../../types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Employment = ({
  employment,
  remove,
}: {
  employment?: EmploymentWithPositions;
  remove: (id: string) => Promise<void>;
}) => {
  const {
    id,
    company,
    descriptor,
    companyLink,
    index: position,
  } = employment ?? {};

  // Alert management
  const [alert, setAlert] = useState(false);

  // Form management
  const [companyName, setCompanyName] = useState(company ?? '');
  const [link, setLink] = useState(companyLink ?? '');
  const [companyDescriptor, setCompanyDescriptor] = useState(descriptor ?? '');
  const [companyPosition, setCompanyPosition] = useState(position ?? 0);

  // Delete validation
  const [deleteValidation, setDeleteValidation] = useState('');

  const saveCompany = async () => {
    toast.promise(
      fetch('/api/employment/updateOrCreate', {
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
      }),
      {
        loading: 'Saving...',
        success: 'Saved!',
        error: 'There was an error',
      },
    );
  };

  const deleteCompany = async () => {
    toast.promise(remove(employment?.id), {
      loading: 'Deleting...',
      success: 'Deleted!',
      error: 'There was an error',
    });
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
      <Space h="md" />
      {id && <Link href={`/administration/${id}`}>View Details</Link>}
      {alert && (
        <Modal
          opened={alert}
          onClose={() => setAlert(false)}
          title="Are you sure you want to delete this job?"
        >
          <Input.Wrapper
            label={`Confirm by writing the company name: ${companyName}`}
          >
            <Input
              placeholder="Company name"
              value={deleteValidation}
              onChange={(e) => setDeleteValidation(e.target.value)}
            />
          </Input.Wrapper>
          <Space h="md" />
          <Group>
            <Button
              color="red"
              onClick={deleteCompany}
              disabled={deleteValidation !== companyName}
            >
              Confirm
            </Button>
            <Button onClick={() => setAlert(false)}>Cancel</Button>
          </Group>
        </Modal>
      )}
    </div>
  );
};

export default Employment;
