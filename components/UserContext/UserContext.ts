import { UserProfile } from '@auth0/nextjs-auth0/client';
import { createContext } from 'react';

const defaultValue = {
  user: null,
  setUser: () => {},
};
const UserContext = createContext<{
  user: ({ isAdmin: boolean } & UserProfile) | null;
  setUser: (user: { isAdmin: boolean } | null) => void;
}>(defaultValue);

export default UserContext;
