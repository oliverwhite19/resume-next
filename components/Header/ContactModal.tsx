import { Button } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';
import classes from './Header.module.css';

interface Props {
  email: string;
  github: string;
  linkedin: string;
}

const ContactModal = ({ email, github, linkedin }: Props) => {
  return (
    <Button.Group
      className={classes.contactButtonGroup}
      orientation="vertical"
    >
      <Button
        leftSection={<IconMail size={60} className={classes.contactButtonIcon} />}
        variant="outline"
        color="red"
        radius="xs"
        size="xl"
        className={classes.contactButton}
        component="a"
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <span className={classes.contactModalButtonAction}>Email</span>
          <span className={classes.contactModalButtonAccount}>{email}</span>
        </div>
      </Button>
      <Button
        leftSection={
          <IconBrandGithub size={60} className={classes.contactButtonIcon} />
        }
        variant="outline"
        color="red"
        radius="xs"
        size="lg"
        className={classes.contactButton}
        component="a"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <span className={classes.contactModalButtonAction}>Github</span>
          <span className={classes.contactModalButtonAccount}>oliverwhite19</span>
        </div>
      </Button>
      <Button
        leftSection={
          <IconBrandLinkedin size={60} className={classes.contactButtonIcon} />
        }
        variant="outline"
        color="red"
        radius="xs"
        size="lg"
        className={classes.contactButton}
        component="a"
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <span className={classes.contactModalButtonAction}>LinkedIn</span>
          <span className={classes.contactModalButtonAccount}>
            oliver-white-453a1221a
          </span>
        </div>
      </Button>
    </Button.Group>
  );
};

export { ContactModal };
