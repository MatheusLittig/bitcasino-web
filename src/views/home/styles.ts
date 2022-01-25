import { styled } from 'stitches.config';

export const Wrapper = styled('main', {
  marginTop: 40,
  marginBottom: 80,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  gap: 40,
});

export const HeroContainer = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});
