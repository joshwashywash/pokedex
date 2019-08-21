import styled from 'styled-components';

export const Button = styled.button`
  font: inherit;
  background: ${({theme: {bg}}) => bg};
  color: ${({theme: {fg}}) => fg};
  border: 2px solid;
  border-radius: ${({theme: {spacing}}) => spacing};
  padding: ${({theme: {spacing}}) => spacing};
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  &:focus,
  &:hover {
    outline: none;
    color: ${({theme: {bg}}) => bg};
    background: ${({theme: {fg}}) => fg};
  }
`;
