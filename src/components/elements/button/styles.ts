import { styled } from 'stitches.config';

export const Wrapper = styled('button', {
  width: 300,
  height: 40,
  borderRadius: '$full',

  color: '$text',
  background: '$primary',

  fontWeight: '$medium',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    opacity: 0.8,
  },

  '@media (max-width: 450px)': {
    width: '100%',
  },
});
