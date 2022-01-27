/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/lexend/latin.css";
import "@fontsource/manrope/latin.css";

import { ColorModeScript } from '@chakra-ui/react'

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";

import NextNprogress from 'nextjs-progressbar';
import NextNProgress from 'nextjs-progressbar';

import "styles/globals.css";
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}



const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {


  return (
    <>
    {(
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript initialColorMode="dark" />
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <meta name="description" content="Welcome to my realm! Here you will find information about myself and various showcases of the projects I have created!" />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
          <Layout>
              <NextNProgress options={{ showSpinner: false }}/>
              <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
    </CacheProvider>
    )}
  </>
  )
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
