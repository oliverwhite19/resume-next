import { useContext } from 'react';
import UserContext from '../components/UserContext/UserContext';
import withAdminAuthRequired from '../components/WithAdminAuthRequired/withAdminAuthRequired';

const Administration = () => {
  const { user } = useContext(UserContext);
  return <div>Hello {user?.name}</div>;
};

export default withAdminAuthRequired(Administration);
