import { Chip, Group, List, Space } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { format, parse } from 'date-fns';
import { Point } from 'tabler-icons-react';
import { screenSizes } from '../../styles/theme';
import { Smol } from '../Text';
import { useStyles } from './Resume.styles';
import type { Position as PositionType } from '../../types';

const Position = ({ position }: { position: PositionType }) => {
  const { classes } = useStyles();
  const { title, accomplishments, start, end, technologies } = position;
  const isSmallScreen = useMediaQuery(
    `(max-width: ${screenSizes.largeMobile}px)`,
  );

  const colours = (tech: string) => {
    switch (tech) {
      case 'JavaScript':
      case 'TypeScript':
        return 'red';
      case 'React':
      case 'Angular':
        return 'purple';
      case 'Ruby on Rails':
      case 'Laravel':
        return 'green';
      case 'React Native':
      case 'Android':
        return 'yellow';
      case 'Docker':
      case 'Java':
        return 'pink';
      case 'Express':
      case 'PHP':
        return 'indigo';
      case 'GraphQL':
        return 'gray';
      case 'PostgreSQL':
      case 'MySQL':
        return 'lime';
      case 'NextJS':
      case 'Ionic':
        return 'cyan';
      default:
        return undefined;
    }
  };

  return (
    <div className={classes.position}>
      <h3>{title}</h3>
      <Smol>
        {start && format(parse(start, 'yyyy-MM-dd', new Date()), 'LLLL yyy')} -{' '}
        {end
          ? format(parse(end, 'yyyy-MM-dd', new Date()), 'LLLL yyy')
          : 'Present'}
      </Smol>
      <Space h="lg" />
      <List icon={<Point size={16} strokeWidth={3} color={'#862d2e'} />}>
        {accomplishments?.map((detail, index) => (
          <List.Item key={index}>{detail}</List.Item>
        ))}
      </List>
      <Space h="lg" />
      {!isSmallScreen && (
        <Chip.Group>
          <Group position="center">
            {technologies?.map((tech, index) => (
              <Chip
                className={classes.chip}
                color={colours(tech)}
                variant="light"
                key={index}
                checked
              >
                {tech}
              </Chip>
            ))}
          </Group>
        </Chip.Group>
      )}
    </div>
  );
};

export { Position };
