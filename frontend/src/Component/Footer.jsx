import React from "react";
import {
  Flex,
  Box,
  Text,
  Link,
  Stack,
  Icon,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

const Footer = () => {


  return (
    <Flex as="footer" gap={30} bg="gray.500" mt="20%">
      <Box padding="5rem" margin={"auto"}> 
        <Stack spacing="1rem" direction="row" alignItems={"center"} fontSize="2xl">
          <Box>
            <Text fontWeight="bold">About Us</Text>
            <VStack>
            <Link href="#">Our Story</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
            </VStack>
          
          </Box>
          <Box>
            <Text fontWeight="bold">Support</Text>
            <VStack>
            <Link href="#">FAQ</Link>
            <Link href="#">Shipping</Link>
            <Link href="#">Returns</Link>
            </VStack>
           
          </Box>
          <Box>
          <VStack>
            <Text fontWeight="bold">Follow Us</Text>
            
            <Link href="#">
              <Icon name="facebook" mr="0.5rem" />
              Facebook
            </Link>
            <Link href="#">
              <Icon name="twitter" mr="0.5rem" />
              Twitter
            </Link>
            <Link href="#">
              <Icon name="instagram" mr="0.5rem" />
              Instagram
            </Link>
            
           
            </VStack>
          </Box>
          
        </Stack>
        <Text textAlign="center" mt="1rem">
                Copyright © {new Date().getFullYear()} E-Commerce Website
            </Text>
      </Box>
      
     
    </Flex>
  );
};

export default Footer;
