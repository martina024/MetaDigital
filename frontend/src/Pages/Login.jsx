import React, { useState } from 'react';
import { useToast, Box, FormControl, FormLabel, Input, Link, FormHelperText, Button, Checkbox, Stack, Text ,Flex, Heading } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Email and password are required.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    // Do form submission here

    toast({
      title: 'Success',
      description: 'You have successfully logged in.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
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
          Login
        </Heading>
    <Box width="400px" margin="auto">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <FormHelperText id="email-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>

          <Checkbox size="lg" variantColor="teal" onChange={() => setShowPassword(!showPassword)}>
            Show Password
          </Checkbox>


          <Button
            size="lg"
            variantColor="teal"
            type="submit"
            mt={4}
          >
            Login
          </Button>

          <Link
            href="#"
            color="teal.500"
            fontWeight="bold"
            mt={4}
          >
            Register
          </Link>
        </Stack>
      </form>
    </Box>
    </Box>
    </Flex>
  );
};

export default Login;
