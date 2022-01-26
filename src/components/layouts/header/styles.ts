import { styled } from 'stitches.config';

export const Wrapper = styled('header', {
  maxWidth: 1200,
  width: '100%',
  m: '0 auto',
  display: 'flex',
  alignItems: 'center',

  '@media (max-width: 1200px)': {
    padding: '0 60px',
  },

  '@media (max-width: 450px)': {
    justifyContent: 'center',
  },
});
