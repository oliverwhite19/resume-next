import { Education } from '../components/Education/Education';
import { Header } from '../components/Header/Header';
import { WorkExperience } from '../components/WorkExperience/WorkExperience';
import { useStyles } from '../styles/index.styles';
import { EmploymentWithPositions } from '../types';
import type { Education as EducationType } from '../prisma/generated/client';

const Resume = ({
    employment,
    education,
}: {
    employment: EmploymentWithPositions[];
    education: EducationType[];
}) => {
    const { classes } = useStyles();
    return (
        <>
            <Header withDescription />
            <section className={classes.section}>
                <WorkExperience employment={employment} />
            </section>
            <section className={classes.section}>
                <Education education={education} />
            </section>
        </>
    );
};

export default Resume;
