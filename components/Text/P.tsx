import React from 'react';
import classes from './Text.module.css';

const P = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`${classes.p} ${className ?? ''}`.trim()} {...props}>
    {children}
  </p>
);
export { P };
