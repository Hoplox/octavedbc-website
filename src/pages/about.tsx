import { Box } from "@chakra-ui/react";
import About from "components/samples/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
      <Box mb={8} w="full">
        <About/>
      </Box>
  );
};

export default Home;

/*
<BrowserRouter>
      <Box mb={8} w="full">
        <Routes>
          <Route exact path="/">
            <SomeText/>
          </Route>
          <Route path="/scipher">
            <ShiftCipher/>
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
    */