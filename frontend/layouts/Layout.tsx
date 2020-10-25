import { Box, useColorMode } from '@chakra-ui/core';
import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/Navbar';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };
  const color = { light: 'black', dark: 'white' };

  return (
    <>
      <Head>
        <title>{'Railtracks'}</title>
      </Head>
      <Box bg={bgColor[colorMode]} color={color[colorMode]}>
        <Box minH='90vh' px={3}>
          <Navbar />
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};
