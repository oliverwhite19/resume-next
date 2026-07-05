import {
  Button,
  Modal,
  Paper,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { useState } from 'react';
import { screenSizes } from '../../styles/theme';
import { H1, P } from '../Text';
import { ContactModal } from './ContactModal';
import classes from './Header.module.css';
import authorImage from '../../public/images/author_.jpg';

type Props = (
  | {
      withDescription: false;
      email?: string;
      github?: string;
      linkedin?: string;
      description?: string;
    }
  | {
      withDescription: true;
      email: string;
      github: string;
      linkedin: string;
      description: string;
    }
) & {
  name: string;
};

const Header = ({
  withDescription,
  name,
  email,
  github,
  linkedin,
  description,
}: Props) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(
    `(max-width: ${screenSizes.largeMobile}px)`,
  );

  return (
    <Paper
      shadow="xl"
      radius="md"
      p="md"
      withBorder
      className={classes.headerContainer}
    >
      <div className={classes.titleContainer}>
        <H1
          variant="gradient"
          gradient={{
            from: 'red.8',
            to: 'red.4',
            deg: 45,
          }}
        >
          {name}
        </H1>
        {withDescription && (
          <div className={classes.buttonContainer}>
            <a
              href="/files/OliverWhiteResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size={isSmallScreen ? 'md' : 'lg'}
                color="red"
                variant="outline"
              >
                Download PDF Resume
              </Button>
            </a>

            <Button
              onClick={() => setOpened(true)}
              size={isSmallScreen ? 'md' : 'lg'}
              color="red"
              variant="outline"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
      {withDescription && (
        <>
          <div className={classes.avatarContainer}>
            <div className={classes.avatarImageWrapper}>
              <Image
                src={authorImage}
                alt="Portrait of Oliver White"
                width={160}
                height={160}
                priority
                className={classes.avatarImage}
              />
            </div>
            <P>{description}</P>
          </div>
        </>
      )}

      {withDescription && (
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Contact"
          centered
          overlayProps={{
            color: theme.colors.gray[2],
            opacity: 0.7,
            blur: 9,
          }}
        >
          <ContactModal email={email} github={github} linkedin={linkedin} />
        </Modal>
      )}
    </Paper>
  );
};

export { Header };
