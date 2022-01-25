import { styled } from 'stitches.config';

export const Wrapper = styled('main', {
  width: 300,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 0',

  borderBottom: '1px solid',
  borderImage: 'linear-gradient(45deg, $low_text , transparent)',
  borderImageSlice: 1,
});

export const CurrencyContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
});

export const CurrencyInfo = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  fontSize: '$sm',
  color: '$low_text',

  gap: '$2',

  h3: {
    fontSize: '$lg',
    color: '$text',
  },
});

export const CloseBtn = styled('button', {
  width: '$5',
  height: '$5',
  borderRadius: '50%',

  transition: 'all 0.2s ease-in-out',

  border: 'none',
  background: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$low_text',
  fontSize: '$lg',

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
  },
});
