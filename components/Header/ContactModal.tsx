import { Button } from '@mantine/core';
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react';
import { useStyles } from './Header.styles';

const buttonStyle = () => ({
  root: {
    paddingLeft: 20,
    '& > *': {
      justifyContent: 'flex-start',
      marginLeft: '3rem',
    },
  },
  leftIcon: {
    marginRight: '0.5rem',
  },
});

interface Props {
  email: string;
  github: string;
  linkedin: string;
}
const ContactModal = ({ email, github, linkedin }: Props) => {
  const { classes } = useStyles();
  return (
    <Button.Group
      sx={{ width: '50%', minWidth: '20rem', margin: 'auto' }}
      orientation="vertical"
    >
      <Button
        leftIcon={<Mail size={60} />}
        variant="outline"
        color="red"
        radius="xs"
        size="xl"
        styles={buttonStyle}
        component="a"
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <p className={classes.contactModalButtonAction}>Email</p>
          <p className={classes.contactModalButtonAccount}>{email}</p>
        </div>
      </Button>
      <Button
        leftIcon={<BrandGithub size={60} />}
        variant="outline"
        color="red"
        radius="xs"
        size="lg"
        styles={buttonStyle}
        component="a"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <p className={classes.contactModalButtonAction}>Github</p>
          <p className={classes.contactModalButtonAccount}>oliverwhite19</p>
        </div>
      </Button>
      <Button
        leftIcon={<BrandLinkedin size={60} />}
        variant="outline"
        color="red"
        radius="xs"
        size="lg"
        styles={buttonStyle}
        component="a"
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.contactModalButtonContents}>
          <p className={classes.contactModalButtonAction}>LinkedIn</p>
          <p className={classes.contactModalButtonAccount}>
            oliver-white-453a1221a
          </p>
        </div>
      </Button>
    </Button.Group>
  );
};

export { ContactModal };
