import { Employer } from '../../types';
import { Paper } from './Paper';

const Job = ({ job }: { job: Employer }) => {
  return (
    <Paper
      link={job.url ?? ''}
      title={job.name ?? ''}
      description={job.description ?? ''}
      positions={job.positions}
    />
  );
};

export { Job };
