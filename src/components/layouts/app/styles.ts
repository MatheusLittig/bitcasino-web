import { styled } from 'stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  background: '$background',

  display: 'grid',
  rows: '80px auto 140px',
  position: 'relative',
  overflowX: 'hidden',

  '@media (max-width: 600)': {
    rows: '80px auto 300px',
  },
});

export const Content = styled('div', {
  maxWidth: 1200,
  w: '100%',
  flex: 1,
  zIndex: 4,
  m: '0 auto',

  '@media (max-width: 1200px)': {
    padding: '0 60px',
  },
});

export const Background = styled('img', {
  position: 'absolute',
  zIndex: 0,
  width: 800,
  top: -60,
  right: -440,
});
