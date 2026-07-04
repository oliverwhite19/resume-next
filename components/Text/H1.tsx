import { Text, TextProps } from '@mantine/core';
import classes from './Text.module.css';

const H1 = ({
  children,
  ...props
}: { children: React.ReactNode } & TextProps) => (
  <Text component="h1" className={classes.h1} {...props}>
    {children}
  </Text>
);
export { H1 };
