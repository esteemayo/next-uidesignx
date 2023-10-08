'use client';

import styled from 'styled-components';

interface NavButtonProps {
  label: string;
  onClick(): void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

const Button = styled.button`
  display: inline-block;
  border: none;
`;

export default NavButton;
