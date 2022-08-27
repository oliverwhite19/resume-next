import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    h1: {
        fontSize: theme.fontSizes.xl,
        fontFamily: 'Oxygen, sans-serif',
    },
    p: {
        fontFamily: 'Cairo, sans-serif',
    },
    smol: {
        fontSize: theme.fontSizes.xs,
        fontFamily: 'Amiko, sans-serif',
    },
}));

export { useStyles };
