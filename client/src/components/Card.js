import React, {useEffect, useRef} from 'react';

import styled from 'styled-components';

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(({isIntersecting, target}) => {
      if (isIntersecting) {
        target.src = target.dataset.src;
        observer.unobserve(target);
      }
    });
  },
  {rootMargin: '0px 0px -64px 0px'}
);

const Sprite = styled.img`
  min-height: 128px;
  min-width: 128px;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const Card = ({name, number}) => {
  const ref = useRef(null);
  useEffect(() => observer.observe(ref.current), []);
  return (
    <Figure>
      <Sprite
        data-src={`https://www.serebii.net/shuffle/pokemon/${number}.png`}
        ref={ref}
        src=""
      />
      <figcaption>{name}</figcaption>
    </Figure>
  );
};

export default Card;
