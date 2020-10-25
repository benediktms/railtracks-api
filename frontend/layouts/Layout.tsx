import { Box } from '@chakra-ui/core';
import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/Navbar';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{'Railtracks'}</title>
      </Head>
      <Box minH='90vh'>
        <Navbar />
        {children}
      </Box>
      <Footer />
    </>
  );
};
