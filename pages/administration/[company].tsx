import dynamic from 'next/dynamic';

import { EmploymentWithPositions } from '../../types';
import { PrismaClient } from '../../prisma/generated/client';
import withAdminAuthRequired from '../../components/WithAdminAuthRequired/withAdminAuthRequired';

const Company = ({ employment }: { employment: EmploymentWithPositions }) => {
  return <>{JSON.stringify(employment.positions)}</>;
};

export async function getServerSideProps({
  params,
}: {
  params: { company: string };
}) {
  const prisma = new PrismaClient();
  const employmentData = await prisma.employment.findFirst({
    include: { positions: true },
    where: { id: params.company },
  });
  return {
    props: {
      employment: employmentData,
    },
  };
}

export default dynamic(() => Promise.resolve(withAdminAuthRequired(Company)), {
  ssr: false,
});
