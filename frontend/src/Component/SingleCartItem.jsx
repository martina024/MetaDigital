
import React from "react";
import {
  Box,
 
  Image,
  Text,
  Button,
  
  HStack,
 
  useToast,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";


export const SingleCartItem = ({
    item,
    handleDecrease,
    handleIncrease,
    handleRemove,
    dd,
  }) => {
    const toast = useToast();
    
    const totalPrice = (item) => {
      
      
      let total = item.mrp * item.quantity ;
      return { total};
    };
    // colapse function for price details
    
    return (
      <Box h="250px" key={item._id}>
        {/* initial sec item quantity */}
        <Text
          mb="30px"
          textAlign={"left"}
          w="300px"
          fontSize="15px"
          display="flex"
          pl="10px"
        >
          {item.title}
        </Text>
  
        <Box display="flex" w="95%" justifyContent="space-between" m="auto">
          <Box display="flex" fontSize="14px">
            <Box py="10px" px="10px" w="30%">
              <Image
                src={item.image}
                style={{
                  width: "50px",
  
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box textAlign={"left"} w="200px">
              <Text> Brand:{item.brand}</Text>
              <Text> category:{item.category}</Text>
              {/* <Text> {item.Spindle_Speed}</Text> */}
              {!dd ? (
                <Button
                  style={{
                    textAlign: "left",
                    display: "flex",
                    fontSize: "13px",
                  }}
                  pl="0px"
                  bg="white"
                  color="red.300"
                  _hover={{ backgroundColor: "background" }}
                  onClick={() => handleRemove(item)}
                >
                  <DeleteIcon color="blue.300" />
                  Remove
                </Button>
              ) : null}
            </Box>
          </Box>
          {dd ? null : (
            <Box
              style={{
                width: "70px",
                display: "flex",
                height: "33px",
                color: "grey",
                alignItems: "center",
                border: "0.5px solid RGBA(0, 0, 0, 0.16)",
              }}
            >
              <button
                style={{
                  alignItems: "center",
                  fontSize: "18px",
                  height: "30px",
                  margin: "auto",
  
                  backgroundColor: "white",
                  borderRight: "0.5px solid RGBA(0, 0, 0, 0.16)",
                  cursor: "pointer",
                }}
                onClick={() => handleDecrease(item)}
              >
                <MinusIcon py="1" />
              </button>
              <input
                type="text"
                value={item.quantity}
                style={{
                  width: "30px",
                  height: "30px",
                  fontSize: "20px",
                  textAlign: "center",
                  margin: "auto",
                }}
              />
              <button
                style={{
                  alignItems: "center",
                  fontSize: "18px",
                  backgroundColor: "white",
                  border: "none",
                  borderLeft: "0.5px solid RGBA(0, 0, 0, 0.16)",
                  cursor: "pointer",
                  margin: "auto",
                }}
                onClick={() => handleIncrease(item)}
              >
                <AddIcon py="1" />
              </button>
            </Box>
          )}
  
          <Box>
            <HStack w="50%" m="auto" justifyContent={"space-between"}>
              <span>RS:{totalPrice(item).total.toLocaleString()}</span>
            
            </HStack>
            
            <HStack w="70%" my="20px">
              <Image
                w="30px"
                h="30px"
                src="https://www.industrybuying.com/static/svg/delivery-truck-afterdiscount.svg"
                alt="Free Shipping"
              />
              <Text color={"#4c993e"}>Free shipping</Text>
            </HStack>
          </Box>
        </Box>
      </Box>
    );
  };