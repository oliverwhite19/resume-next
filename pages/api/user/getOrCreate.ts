import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../prisma/generated/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const prisma = new PrismaClient();
  const { user } = (await getSession(req, res)) || {};

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const dbUser = await prisma.user.findUnique({
    where: { userId: user.sub },
  });

  console.log({ dbUser });
  if (dbUser) {
    res.status(200).json({ user: dbUser });
    return;
  }

  const createdUser = await prisma.user.create({
    data: {
      userId: user.sub,
    },
  });
  console.log({ createdUser });

  res.status(200).json({ user: createdUser });
}
