import { createStyles } from '@mantine/core';

export const useLayoutStyles = createStyles((theme) => ({
  mainContainer: {
    [theme.fn.largerThan('lg')]: {
      maxWidth: 1200,
      marginInline: 'auto',
    },
  },
}));
