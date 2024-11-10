'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

import Heading from '@/components/Heading';
import { CommonImage } from '@/components/common/CommonImage';

interface ErrorProps {
  error: Error;
}

const ErrorState = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <Wrapper>
        <StyledImage
          src='/img/error-warning.png'
          width={400}
          height={400}
          alt=''
        />
        <Heading title='Uh oh!' subtitle='Something went wrong' center />
        <Button type='button'>Reload page</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 85vh;
  background-color: ${({ theme }) => theme.bg};

  @media only screen and (max-width: 26.875em) {
    height: 75vh;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(CommonImage)`
  width: 40rem;
  height: auto;
  object-fit: contain;

  @media only screen and (max-width: 56.25em) {
    width: 42rem;
  }

  @media only screen and (max-width: 50em) {
    width: 44rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 46rem;
  }

  @media only screen and (max-width: 30em) {
    width: 42rem;
  }

  @media only screen and (max-width: 25em) {
    width: 40rem;
    height: 30rem;
  }

  @media only screen and (max-width: 21.5em) {
    height: 27rem;
  }

  @media only screen and (max-width: 18.75em) {
    height: 25rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 42rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 45rem;
  }

  @media only screen and (min-width: 125em) {
    width: 50rem;
  }
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 1.4rem;
  width: 20rem;
  height: 6rem;
  background-color: var(--clr-purple-light-1);
  color: var(--clr-white);
  border-radius: 10rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.75;
  }
`;

export default ErrorState;
