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
      <Box margin="8" align="center">
        <Stack direction={"row"} maxWidth={{base: "100%", md: "75%" ,'2xl': "75%"}}>
          <Box marginTop={16}>
            <Header/>
          </Box>
          <Spacer/>
          <Box as="main" marginY={22}  margin="0 auto" paddingLeft={{base: 8, md: 64, '2xl': 96}} maxWidth={{base: 384 ,md:2048}}>
            {children}
            <Box align="start" margin={0}><Footer/></Box>
          </Box>
        </Stack>
      </Box>
      <Spacer/>
    </HStack>
  );
};

export default Layout;
