import React, { useEffect, useState } from "react";
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
import {BsMenuButtonWideFill} from "react-icons/bs"
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../asset/projectlogo.png"
import Menu from "./Menu";
import axios from "axios";


const Navbar = () => {
  const navigate=useNavigate()
  const [Cart_Data, set_Cart_Data] = useState([]);
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchData = async () => {
    // console.log("data")
    let res = await axios
      .get(`https://red-helpful-seagull.cyclic.app/products/cart`)
      .then((res) => {
        set_Cart_Data(res.data);
        console.log(res);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box bg="black">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.2rem"
        bg="brand.600"
        boxShadow="md"
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={2}
      >
        <VStack align="center" ml={["none","none","70px"]}>
          {/* <Image src={ProjectLogo} alt="logo" /> */}
          <Link href="/">
          <Text p="0 10px" fontWeight="bold" fontSize="25px" ml={2} color="gray.400" fontFamily={"sans-serif"} border="1px solid #E2E8F0" borderStyle={"dotted"}>
            META Digital
          </Text>
          </Link>
        </VStack>

        <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
          <IconButton
            size="sm"
            aria-label="Menu"
            icon="menu"
           bg="brand.800"
          />
        </Box>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose} bg="brand.700" >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>My App</DrawerHeader>
           
            <DrawerBody>
            <VStack>
            <Input placeholder="Search" border={"1px solid gray"}/>
            <Link href="/"><FaHouseUser size = '28px' color="#4A5568"/></Link>
            <Link href="#"><FcAbout size = '28px' color="#4A5568"/></Link>
            <Link href="#">Login</Link>
            <Link href="#">Sign up</Link>
            <Link href="/cart"><FaShoppingCart size = '28px' color="#4A5568"/></Link>
            </VStack>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>
  

        <Flex display={{ base: "none", md: "flex" }} fontSize="1.1rem" gap={10} border="0px solid red" w={"70rem"} justifyContent={"space-between"} >
           
    <Box>
      <HStack gap={"50px"}>
      <Box>
        <Popover >
          
            <PopoverTrigger trigger="hover">
              <Box style={{cursor:"pointer"}} display="flex" width="2rem">
              <HStack border="0px solid red" w="full" >
            <Box border="0px solid red" w="full" mr="10%"><BsMenuButtonWideFill  size = '28px' color="#E2E8F0" />
            {/* <Text as='b' fontFamily={"cursive"}  >MENU</Text> */}
            </Box>
            </HStack>
              </Box>
            
            </PopoverTrigger>
            
            <PopoverContent >
            <PopoverBody>
              <Box>
              <Menu/>
              </Box>
             
            </PopoverBody> 
            </PopoverContent>
        
        </Popover>
      </Box>
            <HStack >
            <Input placeholder="Search...." border={"1px solid #065666"} width="25rem" />
            </HStack>
      </HStack>
  
    </Box>


    <Box>
      <HStack>
      <Link to="/"  >
        <HStack   border="0px solid red">
            <FaHouseUser size = '29px' color="#E2E8F0" />
            <Text  fontFamily={"cursive"}  color="gray.400" >Home</Text>
            </HStack>
            </Link>
          
            <HStack   border="0px solid red" >
            <Link href="#"  border="0px solid red" w="20%" mr="15%"><FcAbout size = '40px' color="#E2E8F0"/></Link>
            <Text  fontFamily={"cursive"} color="gray.400">About</Text>
            </HStack>

            {/* MY Account */}

            <Popover>
        <PopoverTrigger>
          <Box style={{cursor:"pointer"}} display="flex" >
          
   
          <HStack   border="0px solid red" w="full" >
            <Link href="#"  border="0px solid red"  mr="2%"><RiAccountCircleFill size = '35px'color="#E2E8F0" /></Link>
            <Text  fontFamily={"cursive"} w="5rem" color="gray.400">Account</Text>
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

    

              <Link href="/cart"><Box style={{ position: 'relative' }}>
            <HStack   border="0px solid red">
              <div style={{ position: "absolute",width: "20px",height: "20px",backgroundColor: "black", color: "white",
              padding: "3px", textAlign:"center",borderRadius: "50%",left: "1px", fontSize:"12px"}}>
                 {Cart_Data.length && Cart_Data.filter(item=>item.quantity > 0).length}
              </div>
            <FaShoppingCart size = '30px' color="#E2E8F0"/>
            <Text  fontFamily={"cursive"} w="5rem" color="gray.400">Cart</Text>
            </HStack>
            </Box>
            </Link>
          

      </HStack>
   
    </Box>

            
           
            
        </Flex>

      </Flex>
    </Box>
  );
};

export default Navbar;

