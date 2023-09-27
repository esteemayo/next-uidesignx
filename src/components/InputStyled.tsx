import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: var(--clr-white);
  color: var(--clr-gray-dark-2);
  border: 1px solid var(--clr-purple-light-1);
  border-radius: 2px;
  outline-color: var(--clr-purple-light-3);
  caret-color: var(--clr-purple-light-3);
  transition: all 0.3s;

  &::placeholder {
    font-size: 1.4rem;
    color: #bbb;
  }
`;
