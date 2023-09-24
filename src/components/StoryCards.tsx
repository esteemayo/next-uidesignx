'use client';

import styled from 'styled-components';

import { cardItems } from '@/data';
import Card from '@/app/about/Card';

const StoryCards = () => {
  return (
    <Container>
      {cardItems.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;
`;

export default StoryCards;
