import { styled } from 'stitches.config';

export const Wrapper = styled('footer', {
  width: '100%',
  position: 'relative',
  zIndex: 1,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Content = styled('div', {
  width: '100%',
  height: '100%',
  m: '0 auto',

  background: 'white',

  display: 'flex',
  alignItems: 'center',
  zIndex: 10,
});

export const Paragraph = styled('p', {
  maxWidth: '1200px',
  m: '0 auto',
  color: '$text_light',
  fontWeight: '$medium',
  fontSize: '$sm',
  textAlign: 'center',
});

export const Figure = styled('img', {
  position: 'absolute',
  width: 500,
  bottom: 140,
  zIndex: -1,
});
