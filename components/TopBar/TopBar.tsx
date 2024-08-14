import { useUser } from '@auth0/nextjs-auth0/client';
import { Anchor, Flex, Paper } from '@mantine/core';
import { useStyles } from './TopBar.styles';
import { useEffect } from 'react';

const TopBar = () => {
  const { user } = useUser();
  const { classes } = useStyles();

  useEffect(() => {
    if (user?.sub) {
      fetch('/api/user/getOrCreate', {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [user]);
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
        <Anchor href="/api/auth/logout">Logout</Anchor>
      </Flex>
    </Paper>
  );
};

export { TopBar };
