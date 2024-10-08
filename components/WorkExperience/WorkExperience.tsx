import { Employer } from '../../types';
import { Job } from '../Resume/Job';

const WorkExperience = ({ employment }: { employment: Employer[] }) => {
  return (
    <>
      <h2>Professional Experience</h2>
      {employment?.map((company, index) => <Job key={index} job={company} />)}
    </>
  );
};

export { WorkExperience };
