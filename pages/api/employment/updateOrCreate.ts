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

  const { id, name, link, descriptor } = req.body;

  let employment;
  if (id) {
    employment = await prisma.employment.update({
      where: { id },
      data: { company: name, companyLink: link, descriptor },
    });
  } else {
    employment = await prisma.employment.create({
      data: { company: name, companyLink: link, descriptor },
    });
  }
  return res.status(200).json({ employment });
}
