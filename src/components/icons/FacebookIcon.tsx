'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { IconLink } from '../buttons/IconLink';

const FacebookIcon = ({ mode }) => {
  return (
    <IconLink href='#' mode={mode}>
      <Facebook>&nbsp;</Facebook>
    </IconLink>
  );
};

const Facebook = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: var(--clr-facebook);
  -webkit-mask-image: url(/svg/facebook.svg);
  mask-image: url(/svg/facebook.svg);
  -webkit-mask-size: cover;
  mask-size: cover;
`;

export default FacebookIcon;
