import { Anchor, Flex, Paper } from '@mantine/core';
import { useStyles } from './TopBar.styles';
import { useContext } from 'react';
import UserContext from '../UserContext/UserContext';

const TopBar = () => {
  const { user } = useContext(UserContext);
  const { classes } = useStyles();
  if (!user) {
    return null;
  }

  return (
    <Paper shadow="xl" radius="md" withBorder>
      <Flex
        mih={50}
        gap="xl"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="nowrap"
        maw={960}
        className={classes.buttonContainer}
      >
        {user.isAdmin && <Anchor href="/api/auth/logout">Administrator</Anchor>}
        <Anchor href="/api/auth/logout">Logout</Anchor>
      </Flex>
    </Paper>
  );
};

export { TopBar };
