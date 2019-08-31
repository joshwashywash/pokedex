import React from 'react';

import styled from 'styled-components';

const P = styled.p`
  text-align: center;
  margin-top: ${({theme}) => theme.spacing};
`;

export default ({content}) => (
  <footer>
    <P>{content}</P>
  </footer>
);
