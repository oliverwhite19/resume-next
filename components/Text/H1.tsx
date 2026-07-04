import { Text, TextProps } from '@mantine/core';
import classes from './Text.module.css';

const H1 = ({
  children,
  ...props
}: { children: React.ReactNode } & TextProps) => (
    <Text className={classes.h1} {...props}>
      <h1>{children}</h1>
    </Text>
  );
export { H1 };
