import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Divider,
  Text,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { SingleCartItem } from "../Component/SingleCartItem";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


const CartPage = () => {
  const [Cart_Data, set_Cart_Data] = useState([]);

  const toast = useToast();
  const [error, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [total, settotal] = useState(0);
const navigate = useNavigate();

  // colapse function for price details
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
     
      let singleprice = ele.mrp;
      Total += Math.floor(singleprice * ele.quantity);
    });
    settotal(Total);
  };
  useEffect(() => {
    handleTotal();
  }, [Cart_Data]);

  const handleDecrease = (item) => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    
    if (item.quantity > 1) {
      let newdata = Cart_Data.map((ele) => {
        if (ele._id === item._id) {
          return { ...ele, quantity: ele.quantity - 1 };
        } else return ele;
      });
      axios
      .patch(
        `https://red-helpful-seagull.cyclic.app/quantity/${item.id}`,
        item,
        {
          headers: {
            Authorization: "Bearer" + " " + token,
            
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      set_Cart_Data(newdata);
    } else {
      toast({
        title: "Quantity",
        description: "Minimum Quantity Is 1.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const handleIncrease = (item) => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
   
    if (item.quantity < 5) {
      let newdata = Cart_Data.map((ele) => {
        if (ele._id === item._id) {
          return { ...ele, quantity: ele.quantity + 1 };
        } else {
          return ele;
        }
      });
      axios
        .patch(
          `https://red-helpful-seagull.cyclic.app/products/quantity/${item.id}`,
          item,
          {
            headers: {
              Authorization: "Bearer" + " " + token,
            
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      set_Cart_Data(newdata);
    } else {
      toast({
        title: "Quantity",
        description: "Maximum Quantity Is 5 .",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleRemove = (item) => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    
    const removedata = Cart_Data.filter((ele) => ele._id !== item._id);
    set_Cart_Data(removedata);
    axios
      .delete(
        `https://red-helpful-seagull.cyclic.app/products/delete/${item.id}`,
        {
          headers: {
            Authorization: "Bearer" + " " + token,
            
          },
        }
      )
      .then((res) => {
        toast({
          title: "Remove Data",
          description: "Removed Succesfully",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  };
  const handleRedirected = () => {
    // navigate("/cart/checkout");
    toast({
        title: "Order...",
        description: "Order Placed Succesfully.",
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
  };



  return (
    <>

    <Navbar/>

      <Box mt="90px" fontFamily={"cursive"}>
        <Box
          display="flex"
          w="67%"
          h="50px"
          alignItems={"center"}
          borderBottom={"0.5px solid RGBA(0, 0, 0, 0.08)"}
          borderTop="0.5px solid RGBA(0, 0, 0, 0.08)"
          ml="10px"
          mt="70px"
        >
          {/* cart page startting from here */}
          <Text fontWeight={"semibold"} fontSize={"20px"}>
            My Cart
          </Text>
          <Text w="70px">({Cart_Data.length}items)</Text>
        </Box>

        <Box display="flex" mb="30px">
          <Box w="70%">
            <Box
              style={{ height: "500px", overflowY: "scroll" }}
              w="98%"
              m="10px"
            >
              <Box
                justifyContent="space-between"
                display="flex"
                w="100%"
                px="50px"
                py="10px"
                bgColor="#F5F5F5"
                m="auto"
                
              >
                <Text ml="2rem">Item</Text>
                <Text ml="6rem">Quantity</Text>
                <Text ml="1rem">Price</Text>
              </Box>
              {/*  mapping all the cart data */}
              {Cart_Data.map((item, index) => (
                <div key={item.id}>
                  <SingleCartItem
                    key={item._id}
                    item={item}
                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease}
                    handleRemove={handleRemove}
                  />
                  <Divider />
                </div>
              ))}
            </Box>
            <Box
              w="98%"
              alignItems={"center"}
              h="70px"
              display="flex"
              m="auto"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              justifyContent={"space-between"}
              px="20px"
            >
              <Button
                h="46px"
                borderRadius={0}
                bgColor={"brand.600"}
                _hover={{ backgroundColor: "brand.400", color: "black" }}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                onClick={() => navigate("/")}
              >
                + CONTINUE SHOPPING
              </Button>
              <Button
                h="45px"
                _hover={{ backgroundColor: "brand.600", color: "white" }}
                color="black"
                borderRadius={0}
                px="30px"
                bgColor="brand.400"
                onClick={handleRedirected}
              >
                PLACE ORDER
              </Button>
            </Box>
          </Box>
          <VStack w="30%" my="10px" mx="10px">
            <Box
              h="auto"
              pb="20px"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              w="100%"
            >
            
              <Box
                bgColor={"#4d4d4d"}
                w="100%"
                h="40px"
                mb={"10px"}
                display="flex"
                px="7px"
                justifyContent="space-between"
              >
                <Text
                  color="white"
                  alignItems={"center"}
                  textAlign="left"
                  pt="5px"
                >
                  Payment Summary
                </Text>
              
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
            </Box>
          
           
          </VStack>
        </Box>
      </Box>
    <Footer/>
    </>
  );
};
export default CartPage;
























































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Image,
//   Text,
//   Input,
//   Button,
//   Flex,
//   Heading,
//   useToast,
// } from '@chakra-ui/react';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const toast = useToast();
//   const [count, setCount]=useState(1);

//   const fetchData = async () => {
//     // console.log("data")
//     let res = await axios
//       .get(`https://tan-determined-dove.cyclic.app/products/cart`)
//       .then((res) => {
//         setCartItems(res.data);
//         console.log(res);
//       });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
  


//   const handleRemove = async (id) => {
//     try {
//       await axios.delete(`https://tan-determined-dove.cyclic.app/products/delete/${id._id}`);
//       setCartItems((prev) => prev.filter((item) => item.id !== id));
//       toast({
//         title: 'Success',
//         description: 'Item removed from cart.',
//         status: 'success',
//         duration: 9000,
//         isClosable: true,
//       });
//     } catch (error) {
//       setError(error);
//       toast({
//         title: 'Error',
//         description: 'Failed to remove item from cart.',
//         status: 'error',
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//   };




//   const handleQuantity=(id)=>
//   {
//     const payload={
//     quantity:count 
//   }
  
//     axios.patch(`https://tan-determined-dove.cyclic.app/products/quantity/${id}`,payload,{
//    headers: {
//      Authorization: 'Bearer'+" "+token //the token is a variable which holds the token
//    }
//   })
//     .then(res=>{
//       console.log(res.data)
//       navigate("/cart")
//     })
//     .catch(err=>console.log(err))
  
//   }

//   const getTotal = () => {
//     return cartItems.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
//   };

  

//   return (
//     <Box maxW="800px" mx="auto">
//       <Heading as="h1" textAlign="center" mb={8}>
//         Cart Page
//       </Heading>
//       {isLoading ? (
//         <Text textAlign="center">Loading...</Text>
//       ) : error ? (
//         <Text textAlign="center">{error}</Text>
//       ) : (
//         <Box>
//           <Flex justify="space-between" mb={2}>
//             <Text fontWeight="bold">Product</Text>
//             <Text fontWeight="bold">Quantity</Text>
//             <Text fontWeight="bold">Price</Text>
//             <Text fontWeight="bold">Remove</Text>
//           </Flex>
//           {cartItems.map((item) => (
//             <Flex key={item.id} justify="space-between" mb={2}>
//               <Flex align="center">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   mr={2}
//                   size="50px"
//                   objectFit="cover"
//                 />
//                 <Text>{item.title}</Text>
//               </Flex>
//               <Box mt="5" fontSize={["sm", "sm", "lg"]}>
//                 <Flex alignItems='center'>
//                   <Box  w='fit-content'>Quantity :</Box>
//                   <Box
//                     ml="2rem"
//                     // p="5px 20px"
//                   >
//                     <Center>
//                       <Button bgColor='gray.300' mr='1' size='sm'  onClick={()=>setCount(count-1)} isDisabled={count===0}>-</Button>
//                       <Button bgColor='gray.300' mr='1' size='sm' disabled>{count}</Button>
//                       <Button bgColor='gray.300'  size='sm' onClick={()=>setCount(count+1)} disabled={count===5}>+</Button>
//                     </Center>
//                   </Box>
//                 </Flex>
//               </Box>
//               <Box>
                
//                 <Button onClick={()=>   (data._id)}></Button>
//               </Box>
              
//               <Text>${item.mrp * item.quantity}</Text>
//               <Button onClick={() => handleRemove(item.id)}>Remove</Button>
//             </Flex>
//           ))}
//           <Flex justify="flex-end" mt={2}>
//             <Text fontWeight="bold">Total: ${getTotal()}</Text>
//           </Flex>
//         </Box>
//       )}
//     </Box>
//   );
//   };
  
//   export default CartPage;
  
    

