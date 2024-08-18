import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const authorizeAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = (await getSession(req, res)) || {};

  if (!user) {
    Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 },
    );
    return false;
  }

  return user;
};

export { authorizeAdmin };
