import type { Education as EducationType } from '../../prisma/generated/client';
import { Paper } from '../Resume/Paper';
import { Paper as MPaper } from '@mantine/core';
const Education = ({ education }: { education: EducationType[] }) => {
    return (
        <MPaper px={0}>
            <h2>Education</h2>
            {education?.map((edu, index) => (
                <Paper
                    key={index}
                    title={edu.title ?? ''}
                    description={edu.description ?? ''}
                    link={edu.link ?? ''}
                />
            ))}
        </MPaper>
    );
};

export { Education };
