import { Paper } from '@mantine/core';
import { EmploymentWithPositions } from '../../types';
import { Job } from '../Resume/Job';

const WorkExperience = ({
    employment,
}: {
    employment: EmploymentWithPositions[];
}) => {
    return (
        <Paper px={0}>
            <h2>Professional Experience</h2>
            {employment?.map((company, index) => (
                <Job key={index} job={company} />
            ))}
        </Paper>
    );
};

export { WorkExperience };
