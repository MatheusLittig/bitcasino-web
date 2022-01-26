import { styled } from 'stitches.config';

export const Wrapper = styled('main', {
  background: 'white',
  borderRadius: '$sm',
  padding: '40px 60px',

  textAlign: 'center',
  color: '$text_light',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',

  '@media (max-width: 1200px)': {
    padding: '20px',
  },

  span: {
    width: '100%',
    maxWidth: '300px',

    '@media (max-width: 1000px)': {
      maxWidth: '100%',
    },
  },
});

export const FormArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '$4',
});
