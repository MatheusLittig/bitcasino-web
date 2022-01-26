import Image from 'next/image';
import { styled } from 'stitches.config';

export const Wrapper = styled('main', {
  height: '100vh',
  background: '$background',

  display: 'grid',
  rows: '80px auto 140px',
  position: 'relative',
  overflowX: 'hidden',
});

export const Content = styled('div', {
  maxWidth: 1200,
  w: '100%',
  flex: 1,
  zIndex: 4,
  m: '0 auto',
});

// export const Figure = styled('img', {
//   position: 'absolute',
//   width: 500,
//   zIndex: 0,
//   bottom: 140,
//   right: 400,

//   '@media (max-height: 900px)': {
//     bottom: -0,
//     right: 600,
//   },

//   '@media (max-height: 768px)': {
//     bottom: -60,
//     right: 500,
//   },

//   '@media (max-height: 700px)': {
//     bottom: -140,
//     right: 400,
//   },
// });

export const Background = styled('img', {
  position: 'absolute',
  zIndex: 0,
  width: 800,
  top: -60,
  right: -440,
});
