import { Button, Paper, Space } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFilePower,
  IconMailFast,
} from '@tabler/icons-react';
import Head from 'next/head';
import { siteUrl } from '../lib/site';
import { Header } from '../components/Header/Header';

const Linktree = () => {
  return (
    <>
      <Head>
        <title key="title">Oliver White - Links</title>
        <meta key="description" name="description" content="Links to Oliver White's resume, GitHub, LinkedIn, and email." />
        <meta key="og:title" property="og:title" content="Oliver White - Links" />
        <meta key="og:description" property="og:description" content="Links to Oliver White's resume, GitHub, LinkedIn, and email." />
        <meta property="og:url" content={`${siteUrl}/linktree`} />
        <meta key="twitter:title" name="twitter:title" content="Oliver White - Links" />
        <meta key="twitter:description" name="twitter:description" content="Links to Oliver White's resume, GitHub, LinkedIn, and email." />
      </Head>
      <Header withDescription={false} name="Oliver White" />
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

export default Linktree;
