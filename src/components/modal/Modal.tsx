'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useCallback, useEffect, useState } from 'react';

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  actionLabel: string;
  secondaryActionLabel?: string;
  disabled?: boolean;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onOpen(): void;
  onClose(): void;
  onSubmit(): void;
  secondaryAction(): void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  actionLabel,
  secondaryActionLabel,
  disabled,
  body,
  footer,
  onOpen,
  onClose,
  onSubmit,
  secondaryAction,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      setShowModal(false);
      onClose();
    },
    [disabled, onClose]
  );

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <CloseButtonContainer>
          <CloseButton onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <Heading>title</Heading>
        </CloseButtonContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.7);
  z-index: 5000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50rem;
  background-color: var(--clr-white);
  padding: 2rem;
  border-radius: 0.5rem;
`;

const CloseButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1rem;
  left: 0;

  display: inline-block;
  border: none;
  font-size: 2rem;
  padding: 0.5rem;
  background-color: transparent;
  color: inherit;
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

const Heading = styled.h1`
  font-weight: 300;
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const Body = styled.div``;

export default Modal;
