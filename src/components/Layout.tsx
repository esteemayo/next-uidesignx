'use client';

import styled from 'styled-components';

import LoginModal from './modal/LoginModal';
import RegisterModal from './modal/RegisterModal';
import DesignModal from './modal/DesignModal';

import Navbar from './navbar/Navbar';
import ScrollButton from './buttons/ScrollButton';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';

import ClientOnly from './ClientOnly';
import Info from './Info';
import DarkMode from './DarkMode';

import ToastProvider from '@/providers/ToastProvider';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientOnly>
      <Container>
        <ToastProvider />
        <Info />
        <Navbar />
        <Sidebar />
        <DesignModal />
        <LoginModal />
        <RegisterModal />
        {children}
        <Footer />
        <ScrollButton />
        <DarkMode />
      </Container>
    </ClientOnly>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: repeat(3, min-content);
`;

export default Layout;
