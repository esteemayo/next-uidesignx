'use client';

import styled from 'styled-components';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import LoginOptions from '../LoginOptions';
import Modal from './Modal';
import ToggleAccount from '../ToggleAccount';
import { Line } from '../Line';
import Heading from '../Heading';

import Input from '../inputs/Input';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useRegisterModal } from '@/hooks/useRegisterModal';

interface IErrors {
  name?: string;
  email?: string;
  username?: string;
  phone?: string;
  password?: string;
  passwordConfirm?: string;
}

enum STEPS {
  INFO = 0,
  CREDENTIALS = 1,
}

const initialState = {
  name: '',
  email: '',
  username: '',
  phone: '',
  password: '',
  passwordConfirm: '',
};

const RegisterModal = () => {
  const isOpen = useRegisterModal((state) => state.isOpen);
  const loginModal = useLoginModal();
  const onClose = useRegisterModal((state) => state.onClose);

  const [step, setStep] = useState(STEPS.INFO);
  const [errors, setErrors] = useState<IErrors>({});
  const [data, setData] = useState(initialState);

  const handlePrev = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const handleNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const handleToggle = useCallback(() => {
    onClose();
    loginModal.onOpen();
  }, [loginModal, onClose]);

  const handleChange = useCallback(
    ({ target: input }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const validateInputs = useCallback(() => {
    let errors: IErrors = {};
    const { name, email, username, password, passwordConfirm } = data;

    if (name.trim() === '') {
      errors.name = 'true';
    }

    if (email.trim() === '') {
      errors.email = 'true';
    } else {
      const regEx =
        /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'true';
      }
    }

    if (password === '') {
      errors.password = 'true';
    } else if (password.length < 8) {
      errors.password = 'true';
    } else if (password !== passwordConfirm) {
      errors.passwordConfirm = 'true';
    }

    return errors;
  }, [data]);

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(() => {
    if (step === STEPS.INFO) {
      return handleNext();
    }

    const errors = validateInputs();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});

    console.log({ ...data });
    handleClear();
    setStep(STEPS.INFO);
  }, [data, handleClear, handleNext, step, validateInputs]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.CREDENTIALS) {
      return 'Register';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step !== STEPS.INFO) {
      return 'Back';
    }

    return undefined;
  }, [step]);

  const handleSecondaryAction = useMemo(() => {
    return step !== STEPS.INFO ? handlePrev : undefined;
  }, [step, handlePrev]);

  const btnSize = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'true';
    }
  }, [step]);

  let bodyContent;

  bodyContent = (
    <Container>
      <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
      <Input
        name='name'
        label='Name'
        value={data.name}
        placeholder='Name'
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={data.email}
        placeholder='Email address'
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        name='username'
        label='Username'
        value={data.username}
        placeholder='Username'
        onChange={handleChange}
        error={errors.username}
      />
    </Container>
  );

  if (step === STEPS.CREDENTIALS) {
    bodyContent = (
      <Container>
        <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
        <Input
          name='phone'
          type='tel'
          label='Phone number'
          value={data.phone}
          placeholder='Phone number'
          onChange={handleChange}
          error={errors.phone}
        />
        <Input
          name='password'
          type='password'
          label='Password'
          value={data.password}
          placeholder='Password'
          onChange={handleChange}
          error={errors.password}
        />
        <Input
          name='passwordConfirm'
          type='password'
          label='Confirm password'
          value={data.passwordConfirm}
          placeholder='Password'
          onChange={handleChange}
          error={errors.passwordConfirm}
        />
      </Container>
    );
  }

  const footerContent = (
    <Container>
      <Line />
      <LoginOptions />
      <ToggleAccount
        title='Already have an account?'
        label='Log in'
        onClick={handleToggle}
      />
    </Container>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Register'
      size={btnSize}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={handleSecondaryAction}
      onClose={onClose}
      body={bodyContent}
      footer={footerContent}
      onSubmit={handleSubmit}
    />
  );
};

const Container = styled.div``;

export default RegisterModal;
