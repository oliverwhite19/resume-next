import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../prisma/generated/client';
import { authorizeAdmin } from '../../../centreware/authentication';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const prisma = new PrismaClient();

  if (!authorizeAdmin(req, res)) {
    return;
  }

  const { id } = req.body;
  await prisma.employment.delete({ where: { id } });
  return res.status(200).json({ id });
}
