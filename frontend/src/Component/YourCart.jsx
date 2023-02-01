import React from 'react'
import {Text, Heading,  VStack,  Button, HStack, AspectRatio, Stack, Image, Divider, useColorMode, useColorModeValue } from '@chakra-ui/react'
const YourCart = () => {
    const {toggleColorMode} = useColorMode()
    const bgColor=useColorModeValue("gray.50" , "whiteAlpha.50")
    const bgText=useColorModeValue("gray.600" , "whiteAlpha.600")
  return (
    <VStack bg={bgColor} w={"full"} h="full" p={10} spacing={10} align="flex-start">
        <VStack alignItems={"flex-start"} spacing={3}>
            <Heading size={"2xl"}>Your Cart</Heading>
            <Text>
                If the price is too hard on your eyes,{" "}
            <Button onClick={toggleColorMode} variant="outline" colorScheme="black">try changing the theme</Button>
                
            </Text>
            
        </VStack>
        <HStack spacing={6} alignItems="center" w="full">
            <AspectRatio ratio={1} w={24}>
                <Image src="" alt=""/>
            </AspectRatio>
            <Stack spacing={0} w="full" direction="row" alignItems="center" justifyContent={"space-between"}>
                <VStack w="full" spacing={0} alignItems="flex-start">
                    <Heading size={"md"}>Product name</Heading>
                    <Text color={bgText}>Product Id</Text>
                </VStack>
                <Heading size={"sm"} textAlign="end">Price</Heading>
            </Stack>
        </HStack>
        <VStack spacing={4} alignItems="stretch" w="full">
            <HStack justifyContent={"space-between"}>
                <Text color={bgText}>Subtotal</Text>
                <Heading size="sm">Rs.200</Heading>
            </HStack>
            <HStack justifyContent={"space-between"}>
                <Text color={bgText}>Taxes (estimated)</Text>
                <Heading size="sm">Rs.28.5</Heading>
            </HStack>
        </VStack>
        <Divider/>
        <HStack justifyContent={"space-between"} w="full">
                <Text color={bgText}>TOTAL</Text>
                <Heading size="lg">Rs.228.5</Heading>
            </HStack>
      </VStack>
  )
}

export default YourCart