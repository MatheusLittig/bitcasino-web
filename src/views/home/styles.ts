import { styled } from 'stitches.config';

export const Wrapper = styled('main', {
  marginTop: 40,
  marginBottom: 80,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  gap: 40,

  '@media (max-width: 1000px)': {
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$10',
  },
});

export const HeroContainer = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  '@media (max-width: 1000px)': {
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$10',
  },

  '@media (max-width: 450px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '$10',
  },
});
