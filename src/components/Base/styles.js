import styled from 'styled-components';
import {padding} from 'polished';

export const Title = styled.h1`
  color: ${props => props.theme.palette.primary};
  ${({theme}) => theme.breakpoints.phone`
      background: red;
   `}
  ${padding('12px', '24px', '36px', '48px')}
`;
