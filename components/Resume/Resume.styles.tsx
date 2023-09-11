import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
    headerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        h2: {
            color: theme.colors.red[8],
        },
        a: {
            textDecoration: 'none',
        },
    },

    position: {
        paddingLeft: '1rem',
        borderLeft: 'solid 3px ' + theme.colors.red[8],
    },

    chip: {
        label: {
            cursor: 'initial',
            '&>span': {
                display: 'none',
            },
        },
        pointerEvents: 'none',
    },

    paperStyles: {
        marginTop: '1rem',
        ':not(:last-child)': {
            marginBottom: '1rem',
        },
    },
}));

export { useStyles };
