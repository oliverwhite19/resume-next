import { useAuth0 } from '@auth0/auth0-react';
import dynamic from 'next/dynamic';
import { SignUpButton } from '../components/Authentication/SignUpButton';

const LoginPage = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <div>Redirecting...</div>;
  }

  return (
    <>
      <div>Login Page</div>
      <SignUpButton />
    </>
  );
};

export default dynamic(() => Promise.resolve(LoginPage), {
  ssr: false,
});
