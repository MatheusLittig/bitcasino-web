import { globalCss } from '@/styles/global';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '$background',
    color: '$text',
  },
  '@media (max-width: 1080px)': {
    html: {
      fontSize: '93.75%',
    },
  },
  '@media (max-width: 720px)': {
    html: {
      fontSize: '87.5%',
    },
  },
  'body, input, textarea, select': {
    fontFamily: '$body',
  },
  button: {
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    fontFamily: '$heading',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  'h1, h2, h3': {
    fontFamily: '$body',
  },

  '#ual-box': {
    background: 'rgb(15, 45, 15) !important',
    color: 'white !important',
    borderRadius: '10px !important',
  },

  '#ual-box div div p': {
    color: ' white !important',
  },

  '#ual-box h1 ': {
    color: 'white !important',
    alignItems: 'center !important',
    fontSize: '24px !important',
  },

  '#ual-box:first-child span': {
    color: 'white !important',
  },
});
