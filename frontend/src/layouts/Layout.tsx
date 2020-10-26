import { Box, Flex, useColorMode } from '@chakra-ui/core';
import React, { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

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
      <Box bg={bgColor[colorMode]} color={color[colorMode]}>
        <Box minH='90vh'>
          <Navbar />
          <Flex justify='center'>{children}</Flex>
        </Box>
        <Footer />
      </Box>
    </>
  );
};
