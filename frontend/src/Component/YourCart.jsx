
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, Heading,  VStack,  Button, HStack, AspectRatio, Stack, Image, Divider, useColorMode, useColorModeValue, useToast, Box } from '@chakra-ui/react'
import { SingleCartItem } from "./SingleCartItem";
const YourCart = () => {
    
    const [Cart_Data, set_Cart_Data] = useState([]);
    const [total, settotal] = useState(0);
    const [error, setError] = useState("");
    

    const {toggleColorMode} = useColorMode()
    const bgColor=useColorModeValue("gray.50" , "whiteAlpha.50")
    const bgText=useColorModeValue("gray.600" , "whiteAlpha.600")


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
    
      const handleTotal = () => {
        let Total = 0;
        Cart_Data.map((ele) => {
         
          let singleprice = ele.price;
          Total += Math.floor(singleprice * ele.quantity);
        });
        settotal(Total);
      };
      useEffect(() => {
        handleTotal();
      }, [Cart_Data]);


     


  return (
   
    <VStack bg={bgColor} w={"full"} h="full" p={10} spacing={10} align="flex-start">
        <VStack alignItems={"flex-start"} spacing={3}>
            <Heading size={"2xl"}>Your Cart</Heading>
            <Text>
                If the price is too hard on your eyes,{" "}
            <Button onClick={toggleColorMode} variant="outline" colorScheme="black">try changing the theme</Button>
                
            </Text>
            
        </VStack>
        
        
      
        <Box>
        {Cart_Data.map((item, index) => (
          <div key={item.id}>
            <SingleCartItem
              key={item._id}
              item={item}
            
             
            />
            <Divider />
          </div>
        ))}
      </Box>
     
             
             
              <Text
                pl="20px"
                fontSize={"13px"}
                color="#de2511"
                py="3px"
                textAlign={"left"}
              >
                {error}
              </Text>
              {!error ? (
                <VStack>
                  <Box
                    display={"flex"}
                    h="30px"
                    justifyContent="space-between"
                    w="90%"
                    margin="auto"
                    py="20px"
                  >
                    <Text>Subtotal:Rs.</Text>
                    <Text>{total.toLocaleString()}</Text>
                  </Box>
                 
                  <Box
                    fontWeight={"bold"}
                    display={"flex"}
                    h="30px"
                    justifyContent="space-between"
                    w="90%"
                    margin="auto"
                    py="20px"
                    fontSize={"20px"}
                  >
                    <Text>Total Price</Text>
                    <Text color="#e45301">{total.toLocaleString()}</Text>
                  </Box>
                  
                </VStack>
              ) : null}
       
     
        
               
      </VStack>
  )
}

export default YourCart