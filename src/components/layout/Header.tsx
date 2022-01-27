import { ReactNode } from "react";
import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Text,
  Stack,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Divider,
  useToast,
  useColorMode,
  VStack,
  Progress,
} from '@chakra-ui/react';
import {Link as ReactLink} from '@chakra-ui/react';
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ThemeToggle from "./ThemeToggle";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

import { useRouter } from "next/router";

import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { BiDownArrow, BiMessageRoundedDots, BiCopy, BiChevronDown } from 'react-icons/bi'

import { useEffect, useState } from "react";

const Links = ['SCipher', 'Projects', 'Resume'];

const NavLink = ({ children, href } : {children:any, href:any}) => {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href ? "page" : null
      })}
    </Link>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const id = 'test-toast'
  const modeColor = useColorModeValue('white', 'gray.800')
  const modeColor2 = useColorModeValue('gray.800', 'white')

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setHeight(window.innerHeight);
    }

    updateDimensions();
    
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex as="header" >
      
      <Stack direction="column" spacing={8} alignItems={'top'}>
            <Heading paddingTop={2} verticalAlign={"middle"} as="h1" size="md" pos="fixed" fontWeight={"900"}
            transitionProperty='color'
            transitionDuration='0.75s'
            transitionTimingFunction='ease-in-out'
            _hover={{
              color:'gray.500'
            }}>
              <Link href="/#">octavedbc.com</Link>
            </Heading>

          <Box fontWeight={"normal"}>
            <br/>
            <VStack align={"start"} pos="fixed" spacing={4}>
                <NavLink href="/#projects" >
                  <Text transition= "all 0.3s ease" _hover={{transform: 'translateX(8px)', cursor: "pointer", fontWeight: "600" }}>
                  Projects
                  </Text>
                </NavLink>
              <NavLink href="/#experience">
              <Text transition= "all 0.3s ease" _hover={{transform: 'translateX(8px)', cursor: "pointer", fontWeight: "600" }}>
                  Experience
                </Text>
              </NavLink>
              <ReactLink target="_blank" href="https://www.linkedin.com/in/octavedbc/" _hover={{textDecoration: "none"}}>
                <Text transition= "all 0.3s ease" _hover={{transform: 'translateX(8px)', cursor: "pointer", fontWeight: "600" }}>
                  Resume
                </Text>
              </ReactLink>
            </VStack>
          </Box>
          {/*
          <Box  align={"start"} paddingTop={"55.75em"} paddingLeft={"20em"} transform= "rotate(90deg)" pos={"fixed"}>
            <Progress value={scrollY / height * 100} height={"2px"} width={"36em"} colorScheme={"whiteAlpha"}/>
          </Box>
          */}
      </Stack>
          
    </Flex>

  );
};

export default Header;
