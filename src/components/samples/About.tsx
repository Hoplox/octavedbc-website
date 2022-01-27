import {
  Box,
  Heading,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  Text,
  Icon,
  CircularProgress,
  Progress,
  Wrap,
  HStack,
  VStack,
  SimpleGrid,
  Flex,
  StackDivider,
  Container,
  Divider,
  Textarea,
  Spacer,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Button,
  Code,
  Stack,
  Image,
  WrapItem,
  Tooltip,
  UnorderedList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  IconButton,
  Avatar,
} from "@chakra-ui/react";

import Link from "next/link";

import {Link as ReactLink} from "@chakra-ui/react";

import {Tooltip as CoolTooltip} from "@chakra-ui/react";
import { UpDownIcon } from '@chakra-ui/icons';
import { isEmpty, toNumber } from "lodash";

import MotionBox from "components/motion/Box";
import {FaCode} from 'react-icons/fa'

import React, { PureComponent } from 'react';

import { useEffect, useState } from 'react'

import { FaCampground, FaMapMarkerAlt, FaGraduationCap, FaFlagUsa, FaUniversity, FaScroll , FaPencilAlt, FaCameraRetro} from 'react-icons/fa';
import { RiComputerFill ,RiBankFill, RiStockFill, RiStockLine } from 'react-icons/ri';
import { HiOutlineGlobe} from 'react-icons/hi';
import { GiCampingTent} from 'react-icons/gi';
import { FiMonitor} from 'react-icons/fi';
import { CgShapeCircle } from 'react-icons/cg'
import { BiDownArrow, BiMessageRoundedDots, BiCopy, BiChevronDown } from 'react-icons/bi'

import {SiChakraui, SiTypescript, SiReact, SiVercel, SiPython, SiJson, SiLua, SiJava, SiJavascript, SiMysql, SiScala, SiHtml5, SiCss3, SiNodedotjs, SiNextdotjs, SiGithub, SiWindowsterminal, SiVisualstudiocode, SiFigma, SiPhpmyadmin, SiLinux, SiWindows} from 'react-icons/si'

const About = () => {
  const TitleColor = useColorModeValue('lightblue', 'grey')
  return (
    <>
    <></>

      <br/>
      <Heading paddingTop={16} paddingBottom={6} as="h2" fontSize={{base: '3xl', md: '5xl'}} textAlign={"start"}>
          Who is this guy?
        </Heading>
      <Stack marginBottom={16} direction={{ base: "column", md: "row" }} marginTop={16}>
        <Box width={{ base: "100%", md: "45%" }} >
        <Heading fontWeight={"light"} fontSize={"xl"} marginBottom={8} lineHeight={1.6}>
          I'm a <mark background-color={TitleColor}>problem solver</mark> that loves to <mark background-color={TitleColor}>create and develop software</mark> through <mark background-color={TitleColor}>prototyping</mark> and magical <mark background-color={TitleColor}>coding!</mark>
         </Heading>
        <br/>
        <Text fontWeight={"light"}>
        Welcome to my realm! I'm Adam Cao, a 20-year-old British Chinese front-end and software engineer. I'm a random guy who enjoys learning and developing random programming technologies!
         </Text>
        <br/>
        <Text fontWeight={"light"}>
        My interest in computer science started at age 10, out of curiosity, I disassembled my dads laptop and spent many hours assembling it back together — turns out, there is alot more to it than a replacable battery!
        </Text>
        <br/>
        <Text fontWeight={"light"}>
        Present day, I'm a front-end and software engineer, always exploring the exciting world of programming and web development whilst currently finalising a BSc degree in computer science at King's College London (KCL).<br/><br/> My current focus is graduating in the summer of 2022 and chasing opportunities as a front-end or software engineer in the tech industry globally.
         </Text>
         <br/>
         <br/>
        </Box>
        <Spacer/>
        <HStack bg="" width={{ base: "100%", md: "45%" }}>
          <Box align="center">
          <CoolTooltip placement="bottom" label="This is me!"><Image boxShadow={"xl"} name='Adam Cao' src='images/me.jpg' alignItems="center" verticalAlign={"center"} rounded={"xl"}  width={"sm"} maxHeight={"xl"} overflow={"hidden"} objectFit={"cover"} transition= "all 0.3s ease"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow:'dark-lg',
            }}/></CoolTooltip>
          </Box>
          <br/>
        </HStack>
      </Stack>

      <Tabs marginTop={12} marginBottom={12}>
          <TabList>
            <Tab fontWeight={"bold"} _focus={{borderTop: 0 }} transitionProperty='background'
                transitionDuration='0.75s'
                transitionTimingFunction='ease-in-out'
                _hover={{
                  background:'gray.200'
                }}>Interests</Tab>
            <Tab fontWeight={"bold"} _focus={{borderTop: 0 }} transitionProperty='background'
                transitionDuration='0.75s'
                transitionTimingFunction='ease-in-out'
                _hover={{
                  background:'gray.200'
                }}>Technical Kit</Tab>
            {/*
            <Tab fontWeight={"bold"} _focus={{borderTop: 0 }} transitionProperty='background'
                transitionDuration='0.75s'
                transitionTimingFunction='ease-in-out'
                _hover={{
                  background:'gray.200'
                }}>Spoken Languages</Tab>
              */}
          </TabList>

          <TabPanels>
            <TabPanel> 
            <br/>
            <Heading size="lg">When I'm not coding... </Heading>
            <br/>
              <SimpleGrid columns={{base: 1, md: 2}} spacing={16}>
                <Box height={"auto"} marginTop={{base: 16, md:8}} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                  <Heading size="md">Planning where to <mark>explore</mark> next.</Heading>
                  <br/>
                  <Box >
                    <Image boxShadow={"2xl"} rounded="xl" width={"100%"} height={56} objectFit={"cover"} src="images/beach.JPEG"
                    
                    />
                  </Box>
                  <br/>
                  <Text fontWeight={"light"}>
                    Although I am currently based in London. Recently, I have explored parts of Europe such as Berlin, Luxembourg and across England in short trips with my friends!
                  </Text>
                </Box>
                <Box height={"auto"} marginTop={{base: 16, md:8}} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                  <Heading size="md">Trading in the <mark>financial markets.</mark></Heading>
                  <br/>
                  <Box>
                    <Image boxShadow={"2xl"} rounded="xl" width={"100%"} height={56} objectFit={"cover"} src="images/graph_up_blue.gif"/>
                  </Box>
                  <br/>
                  <Text fontWeight={"light"}>
                    I have a keen interest in the financial markets, most notably the U.S stock markets. I like to invest and day trade when I have free-time during market hours.
                  </Text>
                </Box>

                <Box height={"auto"} marginBottom={16} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                  <Heading size="md">I'm enjoying <mark>food and wine.</mark></Heading>
                  <br/>
                  <Box>
                    <Image boxShadow={"2xl"} rounded="xl" width={"100%"} height={56} objectFit={"cover"} src="images/foodie3.gif"/>
                  </Box>
                  <br/>
                  <Text fontWeight={"light"}>
                    Trying new food and wine experiences goes a long way in bringing joy after a long day of starting at my computer screens.
                  </Text>
                </Box>

                <Box height={"auto"} marginBottom={16} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                  <Heading size="md">I'm <mark>capturing</mark> cool moments.</Heading>
                  <br/>
                  <Box>
                    <Image boxShadow={"2xl"} rounded="xl" width={"100%"} height={56} objectFit={"cover"} src="images/photography.jpg"/>
                  </Box>
                  <br/>
                  <Text fontWeight={"light"}>
                    Creating, visualising then editing shots has always been an interest of my since my dad gave me his old DSLR camera to play around with!
                  </Text>
                </Box>
                
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <br/>
              <Heading fontWeight={"light"} fontSize={"xl"}>Progamming Lanuages</Heading>
              <br/>
              <SimpleGrid columns={{base: 3, md: 8}} spacing={8} fontSize={"xs"}>
                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiPython size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Python
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiLua size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Lua
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiJava size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Java
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiMysql size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    SQL
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiScala size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Scala
                  </Text>
                </Box>
                
              </SimpleGrid>

              <Heading fontWeight={"light"} fontSize={"xl"} marginTop={8}>Web Development</Heading>
              <br/>
              <SimpleGrid columns={{base: 3, md: 8}} spacing={8} fontSize={"xs"}>
                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiHtml5 size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    HTML
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiCss3 size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    CSS
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiJavascript size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    JavaScript
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiTypescript size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    TypeScript
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiReact size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    React
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiNodedotjs size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Node.js
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiNextdotjs size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Next.js
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiVercel size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Vercel
                  </Text>
                </Box>
              </SimpleGrid>

              <Heading fontWeight={"light"} fontSize={"xl"} marginTop={8}>Tools & Misc</Heading>
              <br/>
              <SimpleGrid columns={{base: 3, md: 8}} spacing={8} fontSize={"xs"}>
                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiGithub size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Github
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiWindowsterminal size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Terminal
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiVisualstudiocode size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    VS Code
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiFigma size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Figma
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiMysql size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Workbench
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiPhpmyadmin size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    PHPMyAdmin
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <FiMonitor size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Bloomberg
                  </Text>
                </Box>

                <Box height={"auto"}  border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiLinux size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Linux Server
                  </Text>
                </Box>

                <Box height={"auto"} border= "2px" borderColor= 'gray' borderRadius= "8px"
                  transitionProperty='all'
                  transitionDuration='0.75s'
                  transitionTimingFunction='ease-in-out'
                  _hover={{
                    color: 'gray.600',
                    borderColor: 'gray.600',
                  }}>
                  <Box align="center" marginTop={2} marginBottom={4} transition= "transform 0.3s ease"
                    _hover={{
                      transform: 'translateX(5px)',
                    }}>
                    <SiWindows size={48} />
                  </Box>
                  <Text fontWeight={"light"} align="center" marginBottom={2}>
                    Windows Server
                  </Text>
                </Box>

              </SimpleGrid>

            </TabPanel>

            <TabPanel>
              <HStack>
                <Text fontWeight={"500"}>Native:</Text>
                <Text >English</Text>
              </HStack>
              <br/>
              <HStack>
                <Text fontWeight={"500"}>Limited Proficiency:</Text>
                <Text >Cantonese</Text>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

      <HStack marginTop={8} id="education">
        <Heading paddingTop={2} marginRight={8} marginBottom={4} as="h2" fontSize="4xl">Education</Heading>
        <Divider borderColor='grey' orientation='horizontal' />
      </HStack>
      <br/>
      <Accordion allowMultiple defaultIndex={[0]} allowToggle outline="0px !important" >
        <AccordionItem isFocusable={false} borderWidth={0}>
          <h2>
            <AccordionButton _focus={{border:0 }} >
            <Box flex='1' textAlign='left' fontWeight="normal" fontSize={"2xl"} padding={2}>
                University
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <VStack spacing={8} align={"left"}>
        <Box paddingTop={6} marginBottom={12}>
          <HStack>
            <Heading fontSize={"2xl"}>King's College London</Heading> 
            <Spacer/>
            <Heading fontSize={"2xl"} display={{ base: "none", md: "inline-block"}}>09/2019 - 06/2022</Heading>
          </HStack>
          <HStack marginTop={3} color="darkgrey">
          <Heading fontSize={"md"}> London, United Kingdom</Heading> <HiOutlineGlobe/>
          </HStack>
          <br/>
          <HStack>
            <Text>Bachelor of Science in Computer Science</Text>
            
            <Stat align="end" display={{ base: "none", md: "inline-block"}} >
              <StatLabel>EXPECTED CLASSIFICATION</StatLabel>
              <StatNumber>1:1</StatNumber>
            </Stat>
          </HStack>
          <br/>
          <Tabs>
            <TabList>
              <Tab fontSize={{ base: "xs", md: "md" }} _focus={{borderTop: 0 }} transitionProperty='background'
                transitionDuration='0.75s'
                transitionTimingFunction='ease-in-out'
                _hover={{
                  background:'gray.200'
                }}>Year One </Tab>
              <Tab fontSize={{ base: "xs", md: "md" }} _focus={{borderTop: 0 }} transitionProperty='background'
                transitionDuration='0.75s'
                transitionTimingFunction='ease-in-out'
                _hover={{
                  background:'gray.200'
                }}>Year Two </Tab>
              <Tab fontSize={{ base: "xs", md: "md" }} _focus={{borderTop: 0 }} transitionProperty='background'
                transitionDuration='0.75s'
                transitionTimingFunction='ease-in-out'
                _hover={{
                  background:'gray.200'
                }}>Year Three </Tab>
              <Tab fontSize={{ base: "xs", md: "md" }} _focus={{borderTop: 0 }} transitionProperty='background'
                transitionDuration='0.75s'
                transitionTimingFunction='ease-in-out'
                _hover={{
                  background:'gray.200'
                }}>Dissertation</Tab>
            </TabList>

            <TabPanels fontSize={"sm"}>
              <TabPanel>
                <Stack spacing={{ base: 3, md: 16 }} align="top" fontWeight={"light"} direction={{ base: "column", md: "row" }} >
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />
                        Computer Systems <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>ARDUINO</Badge>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />
                        Database Systems <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>MYSQL</Badge>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />
                        Data Structures <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>JAVA</Badge>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />
                        Elementary Logic with Applications <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>LOGIC</Badge>
                      </ListItem>
                      </List>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />
                        Foundations of Computing 1 <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>MATH & LOGIC</Badge>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />
                        Programming Practice and Applications <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>JAVA</Badge>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />
                        Intro to Software Engineering <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>DEV METHODOLOGIES</Badge>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />
                        Intro to Professional Practice <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>ETHICS</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='purple'>ADDITIONAL MODULE</Badge>
                      </ListItem>
                    </List>
                </Stack>
              </TabPanel>
              <TabPanel>
              <Stack spacing={{ base: 3, md: 16 }} align="top" fontWeight={"light"} direction={{ base: "column", md: "row" }} >
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Robotics Group Project <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>PYTHON</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>BASH</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Programming Language Design Paradigms <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>PYTHON</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Practical Experiences of Programming <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>C++</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Scala</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Python</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Operating Systems and Concurrency <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>JAVA</Badge>
                  </ListItem>
                </List>

                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Foundations of Computing 2 <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>PYTHON</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Intro to Robotics <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>MATLAB</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Intro to Artificial Intelligence <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>PDDL</Badge>
                  </ListItem>
                </List>
              </Stack>
              </TabPanel>
              <TabPanel>
              <Stack spacing={{ base: 3, md: 16 }} align="top" fontWeight={"light"} direction={{ base: "column", md: "row" }} >
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Advanced Topics in Information Retrieval <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='pink'>Dissertation</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Artificial Intelligence Reasoning and Decision Making <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>PYTHON</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Computational Models <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='orange'>TO FIND OUT</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Cryptography <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Data Security</Badge>
                  </ListItem>
                  </List>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={RiComputerFill} color='grey' />
                      Human-Computer Interaction <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>FIGMA</Badge>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={RiComputerFill} color='grey' />
                      Machine Learning <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='orange'>TO FIND OUT</Badge>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={RiBankFill} color='grey' />
                      Corporate Lobbying in the Global Economy <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='orange'>To find out</Badge>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={RiBankFill} color='grey' />
                      Financial Trading Programme <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>PYTHON</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='purple'>Additional Module</Badge>
                    </ListItem>
                  </List>
                </Stack>
              </TabPanel>

              <TabPanel fontWeight={"light"}>
              <Text>Information Retrieval search is the process in which data is obtained that is relevant to the information need and search query provided. However the results returned from a query search can sometimes return irrelevant data that does not meet the users information needs.
              <br/>
              <br/>
              </Text>
              <Text>Neural networks are increasingly being implemented and developed to be integrated within the information retrieval search process to increase the precision and quality of data returned from a query search.
              </Text>
              <br/>
              <Text>This project reports aim is to create and implement a neural network information retrieval search method to ensure high quality data results that match the users information needs based on their search query.
              </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
          
        </Box>
      </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isFocusable={false}>
          <h2>
            <AccordionButton _focus={{border:0 }}>
              <Box flex='1' textAlign='left' fontWeight="normal" fontSize={"2xl"} padding={2}>
              Sixth Form / College
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <VStack spacing={8} align={"left"}>
            <Box paddingTop={6} marginBottom={12}>
              <HStack>
                <Heading fontSize={"2xl"}>Carmel College Sixth Form</Heading> 
                <Spacer/>
                <Heading fontSize={"2xl"} display={{ base: "none", md: "inline-block"}}>09/2017 - 06/2019</Heading>
              </HStack>
              <br/>
              <Heading fontSize={"xl"} color="darkgrey" display={{ md: "none", base: "inline-block"}}>09/2017 - 06/2019</Heading>
              <HStack marginTop={3} color="darkgrey">
                <Heading fontSize={"md"}> Merseyside, United Kingdom</Heading> <HiOutlineGlobe/>
              </HStack>
              <br/>
              <Stat align="start" display={{ md: "none", base: "inline-block"}}>
                <StatLabel>A-LEVEL GRADES</StatLabel>
                <StatNumber>A A A*</StatNumber>
              </Stat>
              <HStack marginTop={4}>
                <List spacing={3} fontSize={{ base: "xs", md: "md"}}>
                  <ListItem>
                    <ListIcon as={RiComputerFill} color='grey' />
                    Computer Science <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>THEORY</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>VISUAL BASIC</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaPencilAlt} color='grey' />
                    Mathematics <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>CORE MATH</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Statistics</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Mechanics</Badge>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCameraRetro} color='grey' />
                    Photography <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Photoshop</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Lightroom</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>InDesign</Badge>
                  </ListItem>

                </List>
                <Stat align="end" display={{ base: "none", md: "inline-block"}}>
                  <StatLabel>A-LEVEL GRADES</StatLabel>
                  <StatNumber>A A A*</StatNumber>
                </Stat>
              </HStack>
            </Box>
          </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem isFocusable={false}>
          <h2>
            <AccordionButton _focus={{border:0 }}>
              <Box flex='1' textAlign='left' fontWeight="normal" fontSize={"2xl"} padding={2}>
              Additional Education
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack spacing={8} align={"start"}>
              <Box paddingTop={6} marginBottom={12} width="100%">
                <HStack>
                  <List spacing={3} fontSize={{ base: "xs", md: "md"}}>
                    <ListItem>
                        <ListIcon as={RiComputerFill} color='grey' />Bloomberg Market Concepts <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Financial Markets</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Bloomberg Terminal</Badge>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaPencilAlt} color='grey' />
                      Quantitative Methods in Finance <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>EXCEL</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>MATH</Badge>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={GiCampingTent} color='grey' />
                      Duke of Edinburgh Award's Bronze, Silver & Gold <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>Leadership</Badge> <Badge fontSize={{base: "0.675em", md: "0.75em"}} colorScheme='blue'>COMMUNICATION</Badge>
                    </ListItem>
                  </List>
                  <Spacer/>
                  <List spacing={3} alignContent={"end"} textAlign={"right"} display={{ base: "none", md: "inline-block"}}>
                    <ListItem>
                      2021
                    </ListItem>
                    <ListItem>
                      2021
                    </ListItem>
                    <ListItem>
                      2015 - 2018
                    </ListItem>
                  </List>
                </HStack>
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br/>

      <Box align="center" paddingTop={0} marginBottom={16} marginTop={16}>
            <Text fontSize='4xl' fontWeight={"light"}>Do I have you intrigued?</Text>
            <br/>
          <Button variant="link" _focus={{ border:0 }} colorScheme={"grey"}>
            <BiMessageRoundedDots size={64}/>
            <Text fontSize={{base: "4xl", md:"6xl"}} marginLeft={4}><ReactLink target="_blank" href="mailto:adamshcao@gmail.com">Say Hello!</ReactLink></Text>
          </Button>
      </Box>
    </>
  );
};

export default About;

