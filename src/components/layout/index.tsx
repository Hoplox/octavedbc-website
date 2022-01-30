import { Box, HStack, Stack, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <HStack margin="0 auto" transition="0.5s ease-out" background={"#1f2022"} color="white"> {/*<Box margin="0 auto" maxWidth={1024} transition="0.5s ease-out"> */}
      <Spacer/>
      <Box margin="8" align="center" maxWidth={{base: "90%", md: "80%" ,'2xl': "80%"}}>
          <Box marginTop={16}>
            <Header/>
          </Box>
          <Box as="main" marginY={22}  margin="0 auto"  maxWidth={{base: 384 ,md:1024}}>
            {children}
            <Box align="start" margin={0}><Footer/></Box>
          </Box>
      </Box>
      <Spacer/>
    </HStack>
  );
};

export default Layout;
