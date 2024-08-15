import { useEffect, useState } from 'react';
import UserContext from './UserContext';
import { UserProfile, useUser } from '@auth0/nextjs-auth0/client';
type User = {
  isAdmin: boolean;
} & UserProfile;
const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const { user: auth0User } = useUser();

  useEffect(() => {
    if (auth0User?.sub) {
      fetch('/api/user/getOrCreate', {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((data) => {
          setUser({ isAdmin: data.user.isAdmin, ...auth0User });
        });
    }
  }, [auth0User]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
