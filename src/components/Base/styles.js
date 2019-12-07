import styled from 'styled-components';
import {padding} from 'polished';
import media from '../../utils/media';

console.log(
  media(
    {max: `700px`},
    {
      background: `red`,
      width: `30px`
    }
  )
);

export const Title = styled.h1(({theme}) => ({
  color: theme.palette.primary,
  ...padding('12px', '24px'),
  ...media(
    {max: `700px`},
    {
      background: `red`,
      width: `30px`
    }
  )
}));
