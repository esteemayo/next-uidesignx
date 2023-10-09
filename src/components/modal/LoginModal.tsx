'use client';

import styled from 'styled-components';
import { ChangeEventHandler, useCallback, useState } from 'react';

import Modal from './Modal';
import ToggleAccount from '../ToggleAccount';
import Heading from '../Heading';
import LoginOptions from '../LoginOptions';

import { Line } from '../Line';
import Input from '../inputs/Input';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useRegisterModal } from '@/hooks/useRegisterModal';

interface IErrors {
  email?: string;
  password?: string;
}

const initialState = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const isOpen = useLoginModal((state) => state.isOpen);
  const registerModal = useRegisterModal();
  const onClose = useLoginModal((state) => state.onClose);

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState<IErrors>({});

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: input }) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log({ ...data });
    handleClear();
  }, [data, handleClear]);

  const handleToggle = useCallback(() => {
    onClose();
    registerModal.onOpen();
  }, [onClose, registerModal]);

  const bodyContent = (
    <Container>
      <Heading title='Welcome back' subtitle='Log into your account' />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={data.email}
        placeholder='you@user.com'
        onChange={handleChange}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        value={data.password}
        placeholder='********'
        onChange={handleChange}
      />
    </Container>
  );

  const footerContent = (
    <Wrapper>
      <Line />
      <LoginOptions />
      <ToggleAccount
        title='First time using iDesignx?'
        label='Create an account'
        onClick={handleToggle}
      />
    </Wrapper>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Login'
      actionLabel='Login'
      onClose={onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

const Container = styled.div`
  margin-top: 1rem;
`;

const Wrapper = styled.div``;

export default LoginModal;
