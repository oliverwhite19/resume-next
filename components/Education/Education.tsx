import type { Education } from '../../types';
import { Paper } from '../Resume/Paper';
const Education = ({ education }: { education: Education[] }) => {
  return (
    <>
      <h2>Education</h2>
      {education?.map((edu, index) => (
        <Paper
          key={index}
          title={edu.school ?? ''}
          description={edu.degree ?? ''}
          link={edu.url ?? ''}
        />
      ))}
    </>
  );
};

export { Education };
