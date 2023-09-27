'use client';

import { ChangeEvent } from 'react';

import { StyledInput } from '../form/StyleInput';
import { Label } from '../form/Label';
import { InputStyled } from '../form/InputStyled';
import { FormGroup } from '../form/FormGroup';
import { StyledLabel } from '../form/StyledLabel';

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder: string;
  style?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  value,
  placeholder,
  style,
  onChange,
}) => {
  if (style === 'true') {
    return (
      <FormGroup>
        <StyledInput
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
        <Label htmlFor={name}>{label}</Label>
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <InputStyled
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </FormGroup>
  );
};

export default Input;
