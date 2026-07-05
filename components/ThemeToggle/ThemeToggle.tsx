import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import classes from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggle = () => {
    const next = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(next);
    document.documentElement.style.backgroundColor =
      next === 'dark' ? '#242424' : '#ffffff';
  };

  const isDark = colorScheme === 'dark';

  return (
    <ActionIcon
      onClick={toggle}
      variant="outline"
      color="gray"
      size="lg"
      radius="xl"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={classes.toggle}
    >
      {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
    </ActionIcon>
  );
};

export { ThemeToggle };
