import { styled } from 'stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  background: '$background',

  display: 'grid',
  rows: '80px auto 140px',
});

export const Content = styled('div', {
  maxWidth: 1280,
  w: '100%',
  flex: 1,
  m: '0 auto',
});
