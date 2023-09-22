'use client';

import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';

const UploadInput = () => {
  return (
    <Container>
      <Input id='file' type='file' />
      <Label htmlFor='file'>Attach a sample</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${Label} {
    outline: 3px solid var(--clr-purple-light-2);
    outline-offset: 3px;

    &:hover {
      display: inline-block;
      color: var(--clr-purple-light-2);
      text-decoration: none;
    }
  }
`;

export default UploadInput;
