import React from 'react'
import {Text, FormControl, FormLabel, Heading, SimpleGrid, VStack, Input, Select, Textarea, Checkbox, Button, GridItem } from '@chakra-ui/react';

const YourDetails = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <VStack spacing={2} alignItems="flex-start">
    <Heading>Your Details</Heading>
    <Text>If you already have an account, click here to log in</Text>
    </VStack>
    <SimpleGrid column={2} columnGap={3} rowGap={4}>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder='Enter First Name'></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder='Enter Last Name'></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Textarea placeholder='Enter Your Address...'></Textarea>
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder='Enter City'></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select placeholder='Select Country'>
              <option value="india">India</option>
              <option value="uk">UK</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="russia">Russia</option>
              <option value="japan">Japan</option>
              <option value="germany">Germany</option>
              <option value="china">China</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="indonesia">Indonesia</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <Checkbox>Ship to the billing address</Checkbox>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <Button varient="primary" w={"full"} size="lg">Place Item</Button>
      </GridItem>
    </SimpleGrid>
  
  </VStack>
  )
}

export default YourDetails