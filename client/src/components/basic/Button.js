import styled from 'styled-components';

export default styled.button`
  font: inherit;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.fg};
  border: 2px solid;
  border-radius: ${({theme}) => theme.spacing};
  padding: ${({theme}) => theme.spacing};
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  &:focus,
  &:hover {
    outline: none;
    color: ${({theme}) => theme.bg};
    background: ${({theme}) => theme.fg};
  }
`;
