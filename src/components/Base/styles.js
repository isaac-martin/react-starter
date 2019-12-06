import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.theme.palette.primary};
  ${({theme}) => theme.breakpoints.phone`
      background: red;
   `}
`;
