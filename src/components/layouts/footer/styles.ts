import { styled } from 'stitches.config';

export const Wrapper = styled('footer', {
  width: '100%',
  background: 'white',
  zIndex: 2,
});

export const Content = styled('div', {
  maxWidth: 1280,
  height: '100%',
  m: '0 auto',

  display: 'flex',
  alignItems: 'center',
});

export const Paragraph = styled('p', {
  color: '$text_light',
  fontWeight: '$medium',
  fontSize: '$sm',
  textAlign: 'center',
});
