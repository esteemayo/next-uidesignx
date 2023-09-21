import styled from 'styled-components';
import { Label } from './Label';

export const StyledTextArea = styled.textarea`
  width: 100%;
  display: inline-block;
  border: none;
  resize: none;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 2rem;
  background-color: var(--clr-white);
  color: var(--clr-gray-dark-2);
  outline-color: var(--clr-purple-light-3);
  caret-color: var(--clr-purple-light-3);
  transition: all 0.3s;

  &::placeholder {
    font-size: 1.4rem;
    color: var(--clr-gray-dark-2);
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
