import React from 'react';
import { ColorModeProvider, ThemeProvider } from '@chakra-ui/core';
import '../styles/globals.css';
import { Layout } from '../layouts/Layout';

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <ColorModeProvider>
          <Layout>{<Component {...pageProps} />}</Layout>
        </ColorModeProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
