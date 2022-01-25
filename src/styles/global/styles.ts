import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  body: {
    background: '$background',
    color: '$text',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
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
});
