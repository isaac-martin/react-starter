import styled from 'styled-components';
import {padding} from 'polished';
import media from '../../utils/media';

export const Title = styled.h1(({theme}) => ({
  color: theme.palette.primary,
  ...(theme.breakpoints.phone && {
    background: `red`
  }),
  ...padding('12px', '24px', '36px', '48px'),
  ...media(
    {min: `300px`, max: `700px`},
    {
      background: `red`,
      width: `30px`
    }
  )
}));
