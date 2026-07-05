import { Button, Paper, Stack, Text } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFilePower,
  IconMailFast,
} from '@tabler/icons-react';
import Head from 'next/head';
import Image from 'next/image';
import { siteUrl } from '../lib/site';
import authorImage from '../public/images/author_.jpg';
import classes from './linktree.module.css';

const links = [
  {
    label: 'Resume',
    href: '/',
    icon: IconFilePower,
    color: 'red' as const,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/oliverwhite19',
    icon: IconBrandGithub,
    color: 'gray' as const,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oliver-white-453a1221a/',
    icon: IconBrandLinkedin,
    color: 'grape' as const,
  },
  {
    label: 'Email',
    href: 'mailto:oliverwhite93@gmail.com',
    icon: IconMailFast,
    color: 'orange' as const,
  },
];

const Linktree = () => {
  return (
    <>
      <Head>
        <title key="title">Oliver White - Links</title>
        <meta
          key="description"
          name="description"
          content="Links to Oliver White's resume, GitHub, LinkedIn, and email."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Oliver White - Links"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Links to Oliver White's resume, GitHub, LinkedIn, and email."
        />
        <meta property="og:url" content={`${siteUrl}/linktree`} />
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Oliver White - Links"
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="Links to Oliver White's resume, GitHub, LinkedIn, and email."
        />
      </Head>
      <Paper
        shadow="xl"
        radius="md"
        p="xl"
        withBorder
        className={classes.container}
      >
        <div className={classes.avatarWrapper}>
          <Image
            src={authorImage}
            alt="Portrait of Oliver White"
            width={112}
            height={112}
            priority
            className={classes.avatarImage}
          />
        </div>
        <Text size="xl" fw={700}>
          Oliver White
        </Text>
        <Text className={classes.bio}>
          Engineering manager & full-stack software engineer. Building things
          with React, TypeScript, and Node.js.
        </Text>
        <Stack gap="md" className={classes.buttonStack}>
          {links.map((link) => (
            <Button
              key={link.label}
              leftSection={
                <link.icon size={20} className={classes.linkButtonIcon} />
              }
              color={link.color}
              variant="outline"
              size="md"
              radius="md"
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkButton}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Paper>
    </>
  );
};

export default Linktree;
