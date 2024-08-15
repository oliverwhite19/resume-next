import { getSession } from '@auth0/nextjs-auth0';
import { PrismaClient } from '../prisma/generated/client';
import { NextApiRequest, NextApiResponse } from 'next';

const authorizeAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();
  const { user } = (await getSession(req, res)) || {};

  if (!user) {
    Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 },
    );
    return false;
  }

  const dbUser = await prisma.user.findUnique({
    where: { userId: user.sub },
  });

  if (!dbUser?.isAdmin) {
    Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 },
    );
    return false;
  }

  return user;
};

export { authorizeAdmin };
