import styled from '@emotion/styled';
import { Paper as MPaper, Space } from '@mantine/core';
import { compareDesc } from 'date-fns';
import type { Position as PositionType } from '../../prisma/generated/client';
import { P } from '../Text';
import { Position } from './Position';
import { useStyles } from './Resume.styles';

const CenteredP = styled(P)`
  text-align: center;
`;

interface Props {
  link: string;
  title: string;
  description: string;
  positions?: PositionType[];
}

const Paper = ({ link, title, description, positions }: Props) => {
  const { classes } = useStyles();
  return (
    <MPaper
      shadow="xl"
      radius="md"
      p="md"
      withBorder
      className={classes.paperStyles}
    >
      <div className={classes.headerWrapper}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
      </div>

      <CenteredP>{description}</CenteredP>
      <Space h="lg" />
      {positions
        ?.sort((one, two) =>
          one.end && two.start ? compareDesc(one.end, two.start) : -1,
        )
        ?.map((position) => (
          <Position key={position.title} position={position} />
        ))}
    </MPaper>
  );
};

export { Paper };
