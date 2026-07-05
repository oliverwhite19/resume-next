import { Paper as MPaper, Space } from '@mantine/core';
import { compareDesc, parse } from 'date-fns';
import { P } from '../Text';
import { Position } from './Position';
import classes from './Resume.module.css';
import type { Position as PositionType } from '../../types';

interface Props {
  link: string;
  title: string;
  description: string;
  positions?: PositionType[];
}

const Paper = ({ link, title, description, positions }: Props) => (
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

    <P className={classes.centered}>{description}</P>
    <Space h="lg" />
    {(positions ?? [])
      .sort((a, b) =>
        compareDesc(
          parse(a.start, 'yyyy-MM-dd', new Date()),
          parse(b.start, 'yyyy-MM-dd', new Date()),
        ),
      )
      .map((position) => (
        <Position key={position.title} position={position} />
      ))}
  </MPaper>
);

export { Paper };
