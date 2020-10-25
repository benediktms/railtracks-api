import React from 'react';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Layout } from '../layouts/Layout';

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <CSSReset />
        <ColorModeProvider>
          <Layout>{<Component {...pageProps} />}</Layout>
        </ColorModeProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
