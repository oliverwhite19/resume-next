import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mantine/core';

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect();
  };
  return <Button onClick={handleSignUp}>Sign Up</Button>;
};

export { SignUpButton };
