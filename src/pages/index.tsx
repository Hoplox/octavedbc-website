import { Box } from "@chakra-ui/react";

import IndexPage from "components/samples/IndexPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
      <Box mb={8} w="full">
        <IndexPage/>
      </Box>
  );
};

export default Home;