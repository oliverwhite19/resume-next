import React from 'react';
import { useStyles } from './text.styles';

const P = ({ children, ...props }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return (
    <p className={classes.p} {...props}>
      {children}
    </p>
  );
};
export { P };
