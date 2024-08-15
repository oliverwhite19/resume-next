import { getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../prisma/generated/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const prisma = new PrismaClient();

  // Abstract all this into a function
  const { user } = (await getSession(req, res)) || {};

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const dbUser = await prisma.user.findUnique({
    where: { userId: user.sub },
  });

  if (!dbUser?.isAdmin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // End abstract here

  const { id, name, link, descriptor } = req.body;

  const employment = await prisma.employment.upsert({
    where: { id },
    update: { company: name, companyLink: link, descriptor },
    create: { company: name, companyLink: link, descriptor },
  });
  return res.status(200).json({ employment });
}
