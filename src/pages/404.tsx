import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

import MotionBox from "components/motion/Box";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <>

    <Box textAlign={"left"} width={{base: 384 ,md:1024}}>
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={["100%", "100%", "100%", "100%"]}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>

      <Text fontSize={"xs"}>Illustration by <Link href="https://storyset.com/">Freepick Stories</Link></Text>

      <Box marginY={16}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Link href="/" passHref>
            <Button variant="ghost"
            >
              Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Page404;
