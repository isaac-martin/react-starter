import styled from 'styled-components';
import {padding} from 'polished';
import media from '../../utils/media';

export const Title = styled.h1(({theme}) => ({
  color: theme.palette.primary,
  ...padding('12px', '24px'),
  ...media(
    {min: theme.breakpoints.tablet},
    {
      background: `red`,
      width: `30px`
    }
  )
}));
