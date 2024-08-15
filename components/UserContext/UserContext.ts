import { createContext } from 'react';

const defaultValue = {
  user: null,
  setUser: () => {},
};
const UserContext = createContext<{
  user: { isAdmin: boolean } | null;
  setUser: (user: { isAdmin: boolean } | null) => void;
}>(defaultValue);

export default UserContext;
