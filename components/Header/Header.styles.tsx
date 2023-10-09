import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 710px)': {
      flexDirection: 'column',
    },
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1rem',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
    },
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    p: {
      marginLeft: '0.875rem',
    },
    padding: '0.5rem',
    '@media (max-width: 542px)': {
      flexDirection: 'column',
      gap: '2rem',
    },
  },
  contactModalButtonContents: {
    width: '100%',
    height: '54px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contactModalButtonAction: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: 'black',
  },
  contactModalButtonAccount: {
    fontSize: '0.6rem',
    color: 'darkgray',
  },
}));

export { useStyles };
