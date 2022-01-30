import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  VisuallyHidden,
  Link as ChakraLink,
  Tooltip,
  Spacer,
} from '@chakra-ui/react';
import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

import { FaEnvelope, FaGithub, FaInstagram, FaTwitter, FaYoutube, FaImages, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';
import ThemeToggle from "./ThemeToggle";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      //bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        margin={0}
        padding={0}
        marginBottom={8}
        as={Stack}
        maxW={"100%"}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>
          {new Date().getFullYear()} -{" "}
          <Text display={"inline-flex"} whiteSpace={"pre"}> designed & built by </Text>
          <Link href="https://adamcao.dev" isExternal _focus={{border:0 }}>
             adamcao.dev
          </Link>
        </Text>
        <Stack direction={'row'} spacing={6}>
          <Tooltip placement="top" label="LinkedIn">
            <Box>
            <SocialButton label={'LinkedIn'} href={"https://www.linkedin.com/in/octavedbc/"}>
              <FaLinkedin />
            </SocialButton>
            </Box>
          </Tooltip>
          <Tooltip placement="top" label="Email">
            <Box>
            <SocialButton label={'Email'} href={'mailto:octave.dbc@gmail.com'}>
              <FaEnvelope/>
            </SocialButton>
            </Box>
          </Tooltip>
        </Stack>
      </Container>
    </Box>
  );
}