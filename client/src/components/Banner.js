import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: ${({theme}) => theme.spacing} 0;
  letter-spacing: 0.25rem;
`;

const Banner = ({title}) => <H1>{title}</H1>;

export default Banner;
