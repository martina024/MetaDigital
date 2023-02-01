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
} from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={colorMode === "light" ? "white" : "gray.800"}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        color={colorMode === "light" ? "gray.800" : "white"}
        boxShadow="md"
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999"
      >
        <Flex align="center" mr={5}>
          {/* <Image src="logo.png" alt="logo" /> */}
          <Text fontWeight="bold" fontSize="xl" ml={2}>
            My App
          </Text>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
          <IconButton
            size="sm"
            aria-label="Menu"
            icon="menu"
            color={colorMode === "light" ? "gray.800" : "white"}
          />
        </Box>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>My App</DrawerHeader>
           
            <DrawerBody>
            <VStack>
            <Input placeholder="Search" />
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Login</Link>
            <Link href="#">Sign up</Link>
            </VStack>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Flex display={{ base: "none", md: "flex" }} fontSize="1.2rem" gap={20} border="0px solid red" w="70rem">
            <Input placeholder="Search" border="0px solid red" />
            <Link href="#" border="0px solid red" >Home</Link>
            <Link href="#" border="0px solid red" >About</Link>
            <Link href="#" border="0px solid red" >Login</Link>
            <Link href="#"  border="0px solid red" w="20%">Sign up</Link>
        </Flex>

        {/* <Button
          onClick={toggleColorMode}
          aria-label="Toggle dark mode"
          variant="ghost"
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </Button> */}
      </Flex>
    </Box>
  );
};

export default Navbar;

