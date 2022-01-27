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
  useToast,
} from "@chakra-ui/react";
import {Link as ReactLink} from '@chakra-ui/react';
import Link from "next/link";
import { BsArrowRight } from 'react-icons/bs'
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiDownArrow, BiMessageRoundedDots, BiCopy, BiChevronDown } from 'react-icons/bi'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { HiOutlineGlobe} from 'react-icons/hi';

const IndexPage = () => {
  const toast = useToast();
  const id = 'droptoast'
  const modeColor = useColorModeValue('white', 'gray.800')
  const modeColor2 = useColorModeValue('gray.800', 'white')
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    md : "md",
  });

  return (
    <>
      <Box textAlign={"left"} maxWidth={"100%"}>
        <Heading paddingTop={48} as="h2" textAlign={"left"} fontWeight="medium" fontSize={{ base: "2xl", md: "6xl" }} transition= "transform 0.3s ease"
          _hover={{
            transform: 'translateX(10px)',
          }}>
          Octave, <Text color={"#94bfbe"} display={"inline-flex"}>Full Stack Engineer.</Text>
          <br/>
        </Heading>
        <Box paddingTop={12}/>

        <HStack><Text maxWidth={"80%"} fontSize={"xl"} fontWeight={"bold"} color={"white"}>Caffeine Enthusiast currently working at <Text textDecoration={"underline"} display={"inline-flex"}>Red Bull</Text> as a Full Stack Engineer.</Text></HStack>
        <br/>
        <Text maxWidth={"80%"} fontSize={"xl"} fontWeight={"bold"} color={"gray"}>Hello, I am Octave De Baynast Cheval. I am a red bull addict. I need help to overcome my caffeine addiction, my Pret subscription certainly does not help at all. Me and my flatmate Adam Cao (he created this really cool website) go to Pret atleast twice a day; it's really bad.</Text>
        
        <HStack marginTop={12}>
        <Text fontWeight={"bold"}>Get in contact</Text>
        <Popover placement="bottom-end">
            <PopoverTrigger>
              <IconButton rounded={8} _focus={{border:0 }} aria-label="" marginBottom={1} size='xs' icon={<BiChevronDown size={24}/>} />
            </PopoverTrigger>
            <PopoverContent width={36} _focus={{border:0 }} border={0} marginTop={2} bg={"#333"} >
              <PopoverBody >
                <Stack align={"start"} spacing={0} padding={0}>
                  <Button fontWeight={600} _selected={{border:0}} _focus={{border:0 }} maxHeight={7} variant="unstyled" fontSize={"sm"} role="group"><HStack><Box transition= "all 0.3s ease"_groupHover={{ transform: 'translateY(-2px)'}}><BiMessageRoundedDots/></Box> <ReactLink _focus={{border:0 }} target="_blank" href="mailto:octave.dbc@gmail.com" _groupHover={{ textDecoration:"underline"}}>Say hello!</ReactLink></HStack></Button>
                  <Button _selected={{border:0}} _focus={{border:0 }} maxHeight={7} variant="unstyled" fontSize={"sm"} role="group" onClick={() => 
                  {
                  navigator.clipboard.writeText("octave.dbc@gmail.com");
                  if (!toast.isActive(id)) {
                    toast({
                      id,
                      description: "Email address copied to clipboard",
                      status: 'success',
                      duration: 3000,
                      isClosable: false,
                    });
                  }
                }}><HStack><Box transition= "all 0.3s ease"_groupHover={{ transform: 'translateY(-2px)'}}><BiCopy/></Box><Box _groupHover={{ textDecoration:"underline"}}><Link href="">Copy email</Link></Box></HStack></Button>
                </Stack>
                <Divider marginTop={2}/>
                <Stack align={"start"} spacing={0} padding={0}>
                  <Button role="group" maxHeight={7} variant="unstyled" fontSize={"sm"} _hover={{ textDecoration:"underline"}}><HStack><ReactLink _focus={{border:0 }} target="_blank" href="https://www.linkedin.com/in/octavedbc/">LinkedIn</ReactLink><Box transition= "all 0.3s ease" color="transparent" _groupHover={{ color: modeColor2 , transform: 'translate(1px, -1px)' }}><BsBoxArrowInUpRight/></Box></HStack></Button>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>

        <Divider colorScheme="white" marginTop={24} marginBottom={12} id="projects"/>

        <Heading marginBottom={12} fontWeight={"light"}>Project samples</Heading>

        <Stack>
          <HStack>
          <Link href="#">
              <Box role="group" background={"url(images/phold1.webp)"} bgSize={"cover"} width={"60%"} height={80} rounded={8} transition= "all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow:'dark-lg',
                  cursor: 'pointer'
                }}>
                <Box bg="rgba(33, 33, 33, 0)" width="100%" height="100%" transition= "all 0.3s ease" _groupHover={{
                  bg:"rgba(11, 11, 11, 0.65)",
                }}>
                  <VStack padding={8} align="left" height={"100%"} color="transparent" transition= "all 0.3s ease" _groupHover={{
                    color: "white"
                  }}>
                    <Spacer/>
                    <Text align="left" fontWeight="bold" fontSize="3xl" >Hello</Text>
                    <Text align="left" fontWeight="bold" fontSize="xl" >Description of project goes right here.</Text>
                  </VStack>
                </Box>
              </Box>
            </Link>
            <Link href="#">
              <Box role="group" background={"url(images/phold5.webp)"} bgSize={"cover"} width={"40%"} height={80} rounded={8} transition= "all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow:'dark-lg',
                  cursor: 'pointer'
                }}>
                <Box bg="rgba(33, 33, 33, 0)" width="100%" height="100%" transition= "all 0.3s ease" _groupHover={{
                  bg:"rgba(11, 11, 11, 0.65)",
                }}>
                  <VStack padding={8} align="left" height={"100%"} color="transparent" transition= "all 0.3s ease" _groupHover={{
                    color: "white"
                  }}>
                    <Spacer/>
                    <Text align="left" fontWeight="bold" fontSize="3xl" >Hello</Text>
                    <Text align="left" fontWeight="bold" fontSize="xl" >Description of project goes right here.</Text>
                  </VStack>
                </Box>
              </Box>
            </Link>
          </HStack>
          <HStack>
              
            <Link href="#">
              <Box role="group" background={"url(images/phold6.webp)"} bgSize={"cover"} width={"40%"} height={80} rounded={8} transition= "all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow:'dark-lg',
                  cursor: 'pointer'
                }}>
                <Box bg="rgba(33, 33, 33, 0)" width="100%" height="100%" transition= "all 0.3s ease" _groupHover={{
                  bg:"rgba(11, 11, 11, 0.65)",
                }}>
                  <VStack padding={8} align="left" height={"100%"} color="transparent" transition= "all 0.3s ease" _groupHover={{
                    color: "white"
                  }}>
                    <Spacer/>
                    <Text align="left" fontWeight="bold" fontSize="3xl" >Hello</Text>
                    <Text align="left" fontWeight="bold" fontSize="xl" >Description of project goes right here.</Text>
                  </VStack>
                </Box>
              </Box>
            </Link>

            <Link href="#">
              <Box role="group" background={"url(images/phold7.webp)"} bgSize={"cover"} width={"60%"} height={80} rounded={8} transition= "all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow:'dark-lg',
                  cursor: 'pointer'
                }}>
                <Box bg="rgba(33, 33, 33, 0)" width="100%" height="100%" transition= "all 0.3s ease" _groupHover={{
                  bg:"rgba(11, 11, 11, 0.65)",
                }}>
                  <VStack padding={8} align="left" height={"100%"} color="transparent" transition= "all 0.3s ease" _groupHover={{
                    color: "white"
                  }}>
                    <Spacer/>
                    <Text align="left" fontWeight="bold" fontSize="3xl" >Hello</Text>
                    <Text align="left" fontWeight="bold" fontSize="xl" >Description of project goes right here.</Text>
                  </VStack>
                </Box>
              </Box>
            </Link>
            
          </HStack>
        </Stack>

        <Divider id="experience" colorScheme="white" marginTop={24} marginBottom={12} />

        <Heading marginBottom={12} fontWeight={"light"}>Experience</Heading>

        <VStack align={"left"} maxWidth={"100%"} spacing={16} marginBottom={24}>

          <HStack spacing={0} maxWidth={"100%"} align={"start"} borderLeftWidth={4} borderColor={"transparent"} transition= "all 0.2s ease"_hover={{paddingLeft: 6,borderLeftWidth: 4,borderColor:"white"}}> 
            <VStack width={"20%"} align={"left"}>
              <Heading fontSize={{base: "xl", md: "xl", '2xl': "2xl"}}>
                ESG Analyst
              </Heading>
            </VStack>
            
            <Box maxWidth={"80%"}>
              <HStack>
                <Heading fontSize={{base: "xl", md: "xl", '2xl': "2xl"}} fontWeight={"normal"} whiteSpace={"pre"}>
                  Candriam 
                </Heading>
                <Heading color="gray" fontSize={{base: "xl", md: "xl", '2xl': "2xl"}} fontWeight={"normal"}  whiteSpace={"pre"}>
                  Paris
                </Heading>
                <Spacer/>
                <Heading color="gray" fontSize={{base: "xl", md: "md", '2xl': "xl"}} fontWeight={"normal"} whiteSpace={"pre"}>
                  JUN 2021 - SEP 2021
                </Heading>
              </HStack>
              <br/>
              <Heading fontSize={{base: "sm", md: "md", '2xl': "xl"}} fontWeight={"light"} overflowWrap="break-word" >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Heading>
            </Box>
          </HStack>

          <HStack spacing={0} maxWidth={"100%"} align={"start"} borderLeftWidth={4} borderColor={"transparent"} transition= "all 0.2s ease"_hover={{paddingLeft: 6,borderLeftWidth: 4,borderColor:"white"}}> 
            <VStack width={"20%"} align={"left"}>
              <Heading fontSize={{base: "xl", md: "xl", '2xl': "2xl"}}>
                Co-Director
              </Heading>
            </VStack>
            
            <Box maxWidth={"80%"}>
              <HStack>
                <Heading fontSize={{base: "xl", md: "xl", '2xl': "2xl"}} fontWeight={"normal"} whiteSpace={"pre"}>
                  Kickstart Global
                </Heading>
                <Heading color="gray" fontSize={{base: "xl", md: "xl", '2xl': "2xl"}} fontWeight={"normal"}  whiteSpace={"pre"}>
                  London
                </Heading>
                <Spacer/>
                <Heading color="gray" fontSize={{base: "xl", md: "md", '2xl': "xl"}} fontWeight={"normal"} whiteSpace={"pre"}>
                  MAR 2020 - JUN 2021
                </Heading>
              </HStack>
              <br/>
              <Heading fontSize={{base: "sm", md: "md", '2xl': "xl"}} fontWeight={"light"} overflowWrap="break-word" >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Heading>
            </Box>
          </HStack>

          <HStack spacing={0} maxWidth={"100%"} align={"start"} borderLeftWidth={4} borderColor={"transparent"} transition= "all 0.2s ease"_hover={{paddingLeft: 6,borderLeftWidth: 4,borderColor:"white"}}> 
            <VStack width={"20%"} align={"left"}>
              <Heading fontSize={{base: "xl", md: "xl", '2xl': "2xl"}}>
                Intern
              </Heading>
            </VStack>
            
            <Box maxWidth={"80%"}>
              <HStack>
                <Heading fontSize={{base: "xl", md: "xl", '2xl': "2xl"}} fontWeight={"normal"} whiteSpace={"pre"}>
                  Bluecrest
                </Heading>
                <Heading color="gray" fontSize={{base: "xl", md: "xl", '2xl': "2xl"}} fontWeight={"normal"}  whiteSpace={"pre"}>
                  London
                </Heading>
                <Spacer/>
                <Heading color="gray" fontSize={{base: "xl", md: "md", '2xl': "xl"}} fontWeight={"normal"} whiteSpace={"pre"}>
                  JUL 2018 - AUG 2018
                </Heading>
              </HStack>
              <br/>
              <Heading fontSize={{base: "sm", md: "md", '2xl': "xl"}} fontWeight={"light"} overflowWrap="break-word" >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Heading>
            </Box>
          </HStack>
        </VStack>


        <Link href="#"><HStack role="group" _hover={{ cursor: "pointer"}}><Heading _hover={{ textDecoration: "underline"}}>Find out more about me</Heading> <Box transition= "all 0.3s ease" _groupHover={{transform: 'translateX(8px)'}}><BsArrowRight size={48}/></Box> </HStack></Link>

      </Box>
    </>
  );
};

export default IndexPage;
