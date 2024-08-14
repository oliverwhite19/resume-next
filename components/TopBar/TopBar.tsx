import { useUser } from '@auth0/nextjs-auth0/client';
import { Anchor, Flex, Paper } from '@mantine/core';
import { useStyles } from './TopBar.styles';

const TopBar = () => {
  const { user } = useUser();
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
        <Anchor href="/api/auth/logout">Logout</Anchor>
      </Flex>
    </Paper>
  );
};

export { TopBar };
