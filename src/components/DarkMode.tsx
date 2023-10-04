'use client';

import styled from 'styled-components';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

import { useDarkMode } from '@/hooks/useDarkMode';

const DarkMode = () => {
  const { dark, light, mode } = useDarkMode();

  return (
    <Container>
      <Wrapper>
        <Button>
          <LightModeOutlinedIcon />
        </Button>
        <Button>
          <DesktopWindowsOutlinedIcon />
        </Button>
        <Button>
          <DarkModeOutlinedIcon />
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 15rem;
  height: fit-content;
  padding: 2.5rem;
  background-color: hsl(277, 94%, 87%);
  color: var(--clr-white);
  border-radius: 2px;
  position: absolute;
  right: 3rem;
  bottom: 10rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  width: 3rem;
  height: 3rem;
  background-color: var(--clr-purple-light-2);
  color: hsl(277, 94%, 87%);
  border-radius: 50%;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2.2rem;
    fill: currentColor;

    &:hover {
      font-size: 2rem;
    }
  }
`;

export default DarkMode;
