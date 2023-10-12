'use client';

import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

interface ImageItemProps {
  src: string;
}

const ImageItem: FC<ImageItemProps> = ({ src }) => {
  return (
    <Container>
      <StyledImage src={src} width={270} height={140} alt='' />
    </Container>
  );
};

const Container = styled.figure`
  cursor: pointer;
`;

const StyledImage = styled(Image)``;

export default ImageItem;
