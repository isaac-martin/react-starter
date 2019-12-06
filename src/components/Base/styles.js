import styled from 'styled-components';
import {padding} from 'polished';
const mediaHelper = require('styled-media-helper');

const media = mediaHelper({
  sm: 320,
  md: 768,
  lg: 1240
});

// export const Title = styled.h1`
//   color: ${props => props.theme.palette.primary};
//   ${({theme}) => theme.breakpoints.phone`
//       background: red;
//    `}
//   ${padding('12px', '24px', '36px', '48px')}
// `;


export const Title = styled.h1(({theme}) => ({
  color: theme.palette.primary,
  ...(theme.breakpoints.phone && {
    background: `red`
  }),
  ...padding('12px', '24px', '36px', '48px'),
  console.log(
  ...(theme.breakpoints.phone && {
    background: `red`
  })
);
}));
