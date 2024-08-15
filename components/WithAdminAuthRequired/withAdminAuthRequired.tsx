'use client';

import { WithPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useContext } from 'react';
import UserContext from '../UserContext/UserContext';

const withAdminAuthRequired: WithPageAuthRequired = (Component) => {
  return (props): JSX.Element => {
    const { user } = useContext(UserContext);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (user?.isAdmin) return <Component user={user} {...(props as any)} />;

    return <></>;
  };
};

export default withAdminAuthRequired;
