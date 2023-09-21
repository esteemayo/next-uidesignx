'use client';

import styled from 'styled-components';
import Card from './Card';

const Printings = () => {
  return (
    <Container>
      <Heading>
        We produce the best <b>printing</b>
        <span>
          and <b>design</b> services
        </span>
      </Heading>
      <Wrapper>
        <Card />
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  background-color: red;
  grid-column: full-start / full-end;
`;

const Heading = styled.h4``;

const Wrapper = styled.div``;

export default Printings;
