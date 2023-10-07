'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface ImageModalProps {
  image: string;
  isOpen: boolean;
  onClose(): void;
  onClick(direction: string): void;
}

interface IWrapper {
  active: string | null | undefined;
}

interface IBtn {
  direction: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  onClose,
  onClick,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const closeModalHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as Element;

      if (target.classList.contains('overlay')) {
        handleClose();
      }
    },
    [handleClose]
  );

  const activeModal = useMemo(() => {
    return showModal?.toString();
  }, [showModal]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay className='overlay' onClick={closeModalHandler}>
      <ButtonContainer direction='left'>
        <Button direction='left' onClick={() => onClick('left')}>
          <ArrowBackIosIcon />
        </Button>
      </ButtonContainer>
      <Wrapper active={activeModal}>
        <Box>
          <ImageContainer>
            <StyledImage src={image} width={1000} height={600} alt='' />
          </ImageContainer>
        </Box>
      </Wrapper>
      <ButtonContainer direction='right' onClick={() => onClick('right')}>
        <Button direction='right'>
          <ArrowForwardIosIcon />
        </Button>
      </ButtonContainer>
      <ButtonWrapper>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </ButtonWrapper>
    </Overlay>
  );
};

const Overlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.7);
  z-index: 5000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div<IWrapper>`
  transform: translateY(${({ active }) => (active === 'true' ? 0 : '100%')});
  opacity: ${({ active }) => (active === 'true' ? 1 : 0)};
  transition: all 300ms;
`;

const Box = styled.div`
  width: 120rem;
  height: 70rem;
  background-color: var(--clr-white);
`;

const ImageContainer = styled.div`
  width: 100rem;
  height: 60rem;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 7rem;
  left: 10rem;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  width: 4rem;
  height: 4rem;
  font-size: 3rem;
  background-color: transparent;
  color: var(--clr-white);
  border-radius: 50%;
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #29292a;
    transform: scale(0.9);
  }

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

const ButtonContainer = styled.div<IBtn>`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '10rem'};
  right: ${({ direction }) => direction === 'right' && '10rem'};
  transform: translateY(-50%);
`;

const Button = styled.button<IBtn>`
  display: inline-block;
  border: none;
  font-size: 4rem;
  background-color: transparent;
  color: var(--clr-white);
  border-radius: 50%;
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

export default ImageModal;
