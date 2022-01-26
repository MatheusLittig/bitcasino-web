import { styled } from 'stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  gap: '$4',
});

export const HeroTitle = styled('h1', {
  fontSize: 42,
  lineHeight: 1.25,
  maxWidth: 450,
  fontWeight: '$medium',

  '@media (max-width: 450px)': {
    maxWidth: 300,
  },
});

export const HeroDescription = styled('p', {
  fontSize: '$lg',
  maxWidth: 280,
  lineHeight: 1.5,
  color: '$low_text',
});
