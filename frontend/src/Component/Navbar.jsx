import React from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Input,
  Button,
  Link,
  useColorMode,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from "@chakra-ui/react";

import {FaShoppingCart,FaHouseUser} from "react-icons/fa"
import { RiAccountCircleFill} from "react-icons/ri"
import {FcAbout} from  "react-icons/fc"

import { useNavigate } from "react-router-dom";
import ProjectLogo from "../asset/projectlogo.png"


const Navbar = () => {
  const navigate=useNavigate()
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="black">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.2rem"
        
        boxShadow="md"
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={25}
      >
        <Flex align="center" ml="15px">
          {/* <Image src={ProjectLogo} alt="logo" /> */}
          <Text fontWeight="bold" fontSize="xl" ml={2}>
            METAVERS Digital
          </Text>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
          <IconButton
            size="sm"
            aria-label="Menu"
            icon="menu"
           
          />
        </Box>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>My App</DrawerHeader>
           
            <DrawerBody>
            <VStack>
            <Input placeholder="Search" border={"1px solid gray"}/>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Login</Link>
            <Link href="#">Sign up</Link>
            <Link href="#"><FaShoppingCart/></Link>
            </VStack>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Flex display={{ base: "none", md: "flex" }} fontSize="1.1rem" gap={15} border="0px solid red" w="70rem">
            <Input placeholder="Search" border={"1px solid gray"} />
            <HStack   border="0px solid red" w="20%" >
            <Link href="#"  border="0px solid red" w="20%" mr="-2%"><FaHouseUser/></Link>
            <Text >Home</Text>
            </HStack>
          
            <HStack   border="0px solid red" w="20%" >
            <Link href="#"  border="0px solid red" w="20%" mr="-2%"><FcAbout/></Link>
            <Text >About</Text>
            </HStack>

            {/* MY Account */}

            <Popover>
        <PopoverTrigger>
          <Box style={{cursor:"pointer"}} display="flex" >
          
   
          <HStack   border="0px solid red" w="full" >
            <Link href="#"  border="0px solid red"  mr="2%"><RiAccountCircleFill/></Link>
            <Text as='b'fontSize='15px' w="5rem" >My Account</Text>
            </HStack>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody color={"black"} >
            <Box>
              <Box my="10px" display={"flex"} justifyContent="center" >
              <Link style={{ textDecoration: 'none' }} onClick={()=>{navigate(`/signup`)}} >Sign Up as a User</Link>
              </Box>
              <hr/>
              <Box my="10px" display={"flex"} justifyContent="center" >
              <Link style={{ textDecoration: 'none' }} onClick={()=>{navigate(`/login`)}} >Log In as a User</Link>
              
              </Box>
              <hr/>
              <Box my="10px" display={"flex"} justifyContent="center" >
              <Link style={{ textDecoration: 'none' }} onClick={()=>{navigate(`/admin/signup`)}} >Sign Up as an Admin</Link>
              
              </Box>
              <hr/>
              <Box my="10px" display={"flex"} justifyContent="center" >
              <Link style={{ textDecoration: 'none' }} onClick={()=>{navigate(`/admin/login`)}} >Log In as an Admin</Link>
              
              </Box>
              
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>

            
            <HStack   border="0px solid red">
            <Link href="#"><FaShoppingCart/></Link>
            <Text as='b'fontSize='15px' w="5rem">Cart</Text>
            </HStack>
            
        </Flex>

      </Flex>
    </Box>
  );
};

export default Navbar;

