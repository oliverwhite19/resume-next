import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../prisma/generated/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const prisma = new PrismaClient();

  const { id, name, link, descriptor } = req.body;

  const employment = await prisma.employment.upsert({
    where: { id },
    update: { company: name, companyLink: link, descriptor },
    create: { company: name, companyLink: link, descriptor },
  });
  return res.status(200).json({ employment });
}
