import React from 'react';

import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  margin-bottom: ${({theme}) => theme.spacing};
`;

export default ({content}) => (
  <header>
    <H1>{content}</H1>
  </header>
);
