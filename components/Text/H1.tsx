import { Text, TextProps } from '@mantine/core';
import { useStyles } from './text.styles';

const H1 = ({
  children,
  ...props
}: { children: React.ReactNode } & TextProps) => {
  const { classes } = useStyles();
  return (
    <Text className={classes.h1} {...props}>
      <h1>{children}</h1>
    </Text>
  );
};
export { H1 };
