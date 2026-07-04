import React from 'react';
import classes from './Text.module.css';

const Smol = ({ children, ...props }: { children: React.ReactNode }) => (
  <p className={classes.smol} {...props}>
    {children}
  </p>
);
export { Smol };
