'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

import AboutHero from '@/components/hero/AboutHero';

const StoryImage = dynamic(() => import('@/components/StoryImage'), {
  ssr: false,
});
const StoryDetails = dynamic(() => import('@/components/StoryDetails'), {
  ssr: false,
});
const StoryCards = dynamic(() => import('@/components/StoryCards'), {
  ssr: false,
});

import Contact from './Contact';
import Photo from './Photo';

const About = () => {
  return (
    <Container>
      <AboutHero />
      <StoryDetails />
      <StoryImage />
      <StoryCards />
      <Photo />
      <Contact />
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: 60vh 40vw min-content 20vw min-content;
  grid-template-columns:
    [full-start]minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export default About;
