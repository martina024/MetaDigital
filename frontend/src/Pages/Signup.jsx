import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  InputGroup,
  InputLeftAddon,
  Icon,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Phone Number: ${phoneNumber}`);
  };

  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      align="center"
      justify="center"
      backgroundColor="gray.50"
    >
      <Box
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        backgroundColor="white"
        width={500}
      >
        <Heading textAlign="center" mb={8}>
          Create an Account
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mb={8}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl>
  <FormLabel htmlFor="password">Password</FormLabel>
  <InputGroup size="md">
    <Input
      pr="4.5rem"
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
    />
    <InputLeftAddon width="4.5rem">
      <Box
        h="1.75rem"
        backgroundColor={
          { light: "white", dark: "gray.700" }[colorMode]
        }
      >
        <Button
          size="sm"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Icon name="view-off" />
          ) : (
            <Icon name="view" />
          )}
        </Button>
      </Box>
    </InputLeftAddon>
  </InputGroup>
</FormControl>
      

                    <FormControl>
                      <FormLabel htmlFor="phone">Phone Number</FormLabel>
                      <Input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </FormControl>

                    <Button
                      mt={4}
                      variantColor="teal"
                      isLoading={isLoading}
                      onClick={handleSubmit}
                    >
                      Register
                    </Button>

                    </Stack>
                    </form>
</Box>
</Flex>
  )
                            }
                    
export default Signup


