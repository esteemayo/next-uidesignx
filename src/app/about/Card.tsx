'use client';

import styled from 'styled-components';

const Card = () => {
  return (
    <Container>
      <Wrapper>
        <svg>
          <use xlinkHref='img/sprite.svg#icon-pencil'></use>
        </svg>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;
`;

const Wrapper = styled.article``;

export default Card;
