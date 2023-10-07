'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import ImageModal from './modal/ImageModal';
import { useImageModal } from '@/hooks/useImageModal';

import { galleryItems } from '@/data';

const ImageGallery = () => {
  const { isOpen, onOpen, onClose } = useImageModal();

  const [slideIndex, setSlideIndex] = useState(0);
  const [images, setImages] = useState(galleryItems);

  const handleOpen = useCallback(
    (index: number) => {
      onOpen();
      setSlideIndex(index);
    },
    [onOpen]
  );

  return (
    <>
      <Container>
        {images.map((item, index) => {
          const { id, img } = item;
          return (
            <Wrapper
              key={id}
              className={`gallery-item--${index + 1}`}
              onClick={() => handleOpen(index)}
            >
              <StyledImage src={img} width={270} height={140} alt='' />
            </Wrapper>
          );
        })}
      </Container>
      <ImageModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const Container = styled.section`
  padding: 10rem 3rem;
  background-color: ${({ theme }) => theme.bgDesign};

  grid-column: full-start / full-end;
  display: grid;
  grid-template-rows: repeat(7, 5vw);
  grid-template-columns: repeat(8, 1fr);
  gap: 1.5rem;
`;

const Wrapper = styled.figure`
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default ImageGallery;
