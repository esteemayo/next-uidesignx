'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { MenuItemProps } from '@/types';

interface IList {
  mode: string;
}

const MenuItem = ({ url, mode, label, onClick }: MenuItemProps) => {
  return (
    <ListItem mode={mode} onClick={onClick}>
      <StyledLink href={url}>{label}</StyledLink>
    </ListItem>
  );
};

const ListItem = styled.li<IList>`
  padding: 1.5rem 0.5rem;
  color: currentColor;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ mode }) => setBorderColor(mode)};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 300;
  font-size: 2rem;
  color: inherit;
  outline-color: ${({ theme }) => theme.outline};

  @media only screen and (max-width: 30em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: var(--default-font-size);
  }

  &:active {
    color: inherit;
  }
`;

const setBorderColor = (mode: string): string => {
  return mode === 'true'
    ? 'var(--clr-bg-dark-tertiary)'
    : 'var(--clr-purple-light-3)';
};

export default MenuItem;
