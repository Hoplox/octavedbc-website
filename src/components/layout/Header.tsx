import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  Text,
  Stack,
  HStack,
  VStack,
  Spacer,
} from '@chakra-ui/react';
import {Link as ReactLink} from '@chakra-ui/react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    <Flex as="header">
      
      <HStack spacing={{base: 0, md: 2, '2xl': 8}} alignItems={'top'} width="100%" fontSize={{base: "xs", md: "sm"}}>
            <Heading verticalAlign={"middle"} color={"white"} as="h1" fontSize={{base: "xs", md: "md"}} fontWeight={"bold"}
            transitionProperty='color'
            transitionDuration='0.75s'
            transitionTimingFunction='ease-in-out'
            _hover={{
              color:'#94bfbe'
            }}>
              <Link href="/#">octavedbc</Link>
            </Heading>
          <Spacer/>
          <Box fontWeight={"normal"}>
            <HStack spacing={8}>
                <NavLink href="/#projects" >
                  <Text fontWeight="500" transition= "all 0.2s ease" borderLeftWidth={2} paddingLeft={2} borderColor={"transparent"}  _hover={{borderColor:"white", cursor: "pointer" }}>
                  Projects
                  </Text>
                </NavLink>
              <NavLink href="/#experience">
              <Text fontWeight="500" transition= "all 0.2s ease" borderLeftWidth={2} paddingLeft={2} borderColor={"transparent"}  _hover={{borderColor:"white", cursor: "pointer" }}>
                  Experience
                </Text>
              </NavLink>
              <ReactLink target="_blank" href="https://www.linkedin.com/in/octavedbc/" _hover={{textDecoration: "none"}}>
                <Text fontWeight="500" transition= "all 0.2s ease" borderLeftWidth={2} paddingLeft={2} borderColor={"transparent"}  _hover={{borderColor:"white", cursor: "pointer" }}>
                  Resume
                </Text>
              </ReactLink>
            </HStack>
          </Box>
          {/*
          <Box  align={"start"} paddingTop={"55.75em"} paddingLeft={"20em"} transform= "rotate(90deg)" pos={"fixed"}>
            <Progress value={scrollY / height * 100} height={"2px"} width={"36em"} colorScheme={"whiteAlpha"}/>
          </Box>
          */}
      </HStack>
          
    </Flex>

  );
};

export default Header;
