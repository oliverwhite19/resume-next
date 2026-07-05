import { Badge, Group, List, Space } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { format, parse } from 'date-fns';
import { IconPoint } from '@tabler/icons-react';
import { screenSizes } from '../../styles/theme';
import { Smol } from '../Text';
import classes from './Resume.module.css';
import type { Position as PositionType } from '../../types';

const Position = ({ position }: { position: PositionType }) => {
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
      <List icon={<IconPoint size={16} strokeWidth={3} color={'#862d2e'} />}>
        {accomplishments?.map((detail) => (
          <List.Item key={detail}>{detail}</List.Item>
        ))}
      </List>
      <Space h="lg" />
      {!isSmallScreen && (
        <Group justify="center">
          {technologies?.map((tech) => (
            <Badge
              className={classes.badge}
              color={colours(tech)}
              variant="outline"
              key={tech}
            >
              {tech}
            </Badge>
          ))}
        </Group>
      )}
    </div>
  );
};

export { Position };
