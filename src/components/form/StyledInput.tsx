'use client';

import styled, { DefaultTheme } from 'styled-components';

import { Label } from './Label';
import { CommonInput } from '../common/CommonInput';

interface IInput {
  path?: string;
}

export const StyledInput = styled(CommonInput)<IInput>`
  border: none;
  background-color: ${({ theme, path }) => setBgColor(theme, path)};
  border-bottom: 3px solid transparent;
  outline-color: var(--clr-purple-light-3);
  caret-color: ${({ theme }) => theme.caret};

  &::placeholder {
    font-size: 1.4rem;
    color: var(--clr-gray-dark-2);

    @media only screen and (max-width: 56.25em) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 50em) {
      font-size: var(--default-font-size);
    }

    @media only screen and (max-width: 34.375em) {
      font-size: 1.7rem;
    }

    @media only screen and (max-width: 25em) {
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 106.25em) {
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: var(--default-font-size);
    }

    @media only screen and (min-width: 125em) {
      font-size: 1.8rem;
    }
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid var(--clr-green);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
  }

  &:focus:invalid {
    border-bottom: 3px solid var(--clr-orange-dark);
  }

  &:placeholder-shown + ${Label} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

const setBgColor = (theme: DefaultTheme, path?: string): DefaultTheme => {
  return path === 'design' ? theme.bgDesignInput : theme.bgInput;
};
