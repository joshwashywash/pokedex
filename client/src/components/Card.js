import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const setSrc = target => {
  const {number = '0'} = target.dataset;
  target.src = `https://www.serebii.net/pokearth/sprites/yellow/${number.padStart(
    3,
    '0'
  )}.png`;
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(({isIntersecting, target}) => {
      if (isIntersecting) {
        setSrc(target);
        observer.unobserve(target);
      }
    });
  },
  {rootMargin: '-60px'}
);

const Card = ({name, number}) => {
  const ref = useRef(null);
  useEffect(() => {
    observer.observe(ref.current);
  }, []);
  return (
    <Figure>
      <img
        style={{minHeight: '60px', objectFit: 'contain'}}
        ref={ref}
        data-number={number}
        alt=""
      />
      <figcaption>{name}</figcaption>
    </Figure>
  );
};

export default Card;
