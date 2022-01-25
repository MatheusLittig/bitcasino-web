import { styled } from 'stitches.config';

export const Wrapper = styled('main', {
  width: 450,
  height: 280,
  background: 'white',
  borderRadius: '$sm',
  padding: 40,

  textAlign: 'center',
  color: '$text_light',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const FormArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '$4',
});
