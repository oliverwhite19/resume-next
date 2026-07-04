import { Button, Paper, Space } from '@mantine/core';
import dynamic from 'next/dynamic';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFilePower,
  IconMailFast,
} from '@tabler/icons-react';
import { Header } from '../components/Header/Header';

const Linktree = () => {
  return (
    <>
      <Header withDescription={false} name="Olive White" />
      <Space h="lg" />
      <Paper shadow="xl" radius="md" p="md" withBorder>
        <Button.Group orientation="vertical">
          <Button
            leftSection={<IconFilePower />}
            color="red"
            variant="outline"
            component="a"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
          <Button
            leftSection={<IconBrandGithub />}
            color="gray"
            variant="outline"
            component="a"
            href="https://github.com/oliverwhite19"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Button>
          <Button
            leftSection={<IconBrandLinkedin />}
            color="grape"
            variant="outline"
            component="a"
            href="https://www.linkedin.com/in/oliver-white-453a1221a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            leftSection={<IconMailFast />}
            color="orange"
            variant="outline"
            component="a"
            href="mailto:oliverwhite93@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Button>
        </Button.Group>
      </Paper>
    </>
  );
};

export default dynamic(() => Promise.resolve(Linktree), {
  ssr: false,
});
