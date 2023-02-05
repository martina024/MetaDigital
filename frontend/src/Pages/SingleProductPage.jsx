import {
    Box, Image,  Text, Button, HStack, useToast,
   Center,Flex,SimpleGrid,
    Spinner,

  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import "../Component/productpage.css";
  import { useParams,useNavigate, Link } from "react-router-dom";
  import axios from "axios";
  import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
  import Navbar from "../Component/Navbar";
  import Footer from "../Component/Footer";
  
  
  
  const SingleProductPage = () => {
    const { id } = useParams();
    // console.log(id);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [count, setCount]=useState(1);
    const navigate=useNavigate()
    
    
  const addToast = useToast();
  const [starCount, setStarCount] = useState(0);

  const handleAddToCart = () => {
    addToast({
      title: "Product added to cart",
     
      status: "success",
      duration: 5000,
    });
  };

    
  
    const token = JSON.parse(localStorage.getItem("token")) || ""
  
    const getData = () => {
      setLoading(true);
      axios.get(`https://red-helpful-seagull.cyclic.app/products/${id}`)
      // return axios.get(`http://localhost:4500/products?page=${page}&limit=16&sortby=price&order=${sortby}&search=${search}`)
  
        .then((res) => {
          // console.log(res.data);
          setData(res.data)
          setStarCount(data.rating);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
        });
    };
  
    useEffect(() => {
      getData(id)
      
    }, [id]);
  
  const handleQuantity=(id)=>
  {
    const payload={
    quantity:count 
  }
  
    axios.patch(`https://red-helpful-seagull.cyclic.app/products/quantity/${id}`,payload,{
   headers: {
     Authorization: 'Bearer'+" "+token //the token is a variable which holds the token
   }
  })
    .then(res=>{
      console.log(res.data)
      navigate("/cart")
    })
    .catch(err=>console.log(err))
  
  }
  
  
    if (loading) {
      return (
        <>
        <Navbar/> 
        <Box mt="40px">
          <Center>
            <Spinner/>
          </Center>
        </Box>
        <Footer/> 
        </>
      );
    }
    if (error) {
      return (
        <>
         <Navbar/> 
        <Box>
          <Center>
          <Image h='100vh' w='100wh' src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000" alt='error image'/>
          </Center>
        </Box>
         <Footer/> 
        </>
      );
    }
  
  
  
  
    return (
      <>
      <Navbar/>
     
   
      <Box mt={"120px"} b="1px solid red" fontFamily={"cursive"}>

      <Box p={3} fontSize={["xs", "xs", "xs"]} h="auto" bgColor="gray.50">
        <Flex
          w="80%"
          margin="auto"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box>
            <Link to="/">
            <Text color="gray" textAlign="left" alignItems='center'>
              Home <ChevronRightIcon /> {`${data?.category}`} <ChevronRightIcon />{data.brand}
            </Text>
            </Link>
          </Box>
          <Box mr={3}>
            <Flex alignItems="center">
              <Box>
                <Flex alignItems="center">
                  <Box mr={1}>
                    <i className="bx bx-envelope"></i>{" "}
                  </Box>
                  <Box>Contact Now</Box>
                </Flex>
              </Box>
              <Box ml={3}>
                <Flex alignItems="center">
                  <Box mr={1} color="gray">
                    <i className="bx bx-heart"></i>
                  </Box>
                  Favourite
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      

      <Box m="auto" w="80%">
      <Box p={5}>
      <SimpleGrid columns={[1, 1, 2]}>
      <Box w={["100%", "100%", "100%", "100%"]}>
            <Flex flexWrap="wrap" justifyContent="center" mt={7}>
             
                
                 
                  <Box ><Image minW="290px" maxW="290px" src={data?.image} /></Box>
                
               
             

            </Flex>
          </Box>
      
       
        <Box w="90%" m="auto">
        
        <Box w="90%" mt={6}>
                <Text textAlign="left" fontSize="lg" fontWeight="bold">
                 {data?.title}
                </Text>
              </Box>
              <br />
          <Box>
                <Text color="gray" textAlign="left">
                 Brand: {data?.brand}
                </Text>
              </Box>
              <br />
          <Box bg="gray.50">
                <Text color="gray"  textAlign="left">
                  Price : {data?.mrp} 
                </Text>
              </Box>
            
         
          <Box mt="5" fontSize={["sm", "sm", "lg"]}>
                <Flex alignItems='center'>
                  <Box  w='fit-content'>Quantity :</Box>
                  <Box
                    ml="2rem"
                    // p="5px 20px"
                  >
                    <Center>
                      <Button bgColor='gray.300' mr='1' size='sm'  onClick={()=>setCount(count-1)} isDisabled={count===0}>-</Button>
                      <Button bgColor='gray.300' mr='1' size='sm' disabled>{count}</Button>
                      <Button bgColor='gray.300'  size='sm' onClick={()=>setCount(count+1)} disabled={count===5}>+</Button>
                    </Center>
                  </Box>
                </Flex>
              </Box>

              <br />
              <br />

              <Box>
                <Button mr={2}>
                  <Flex alignItems="center">
                    <Box fontSize={['lg','lg','lg']} cursor="pointer">
                      <i className="bx bx-heart"></i>
                    </Box>
                    <Box ml="5px">Favourite</Box>
                  </Flex>
                </Button>
                <Button onClick={()=>handleQuantity(data._id)}>
                  <Flex alignItems="center">
                    <Box fontSize={['lg','lg','lg']} cursor="pointer">
                    <i className='bx bx-cart-alt'></i>
                    </Box>
                    <Box ml="5px"  onClick={handleAddToCart}>Add to Cart</Box>
                  </Flex>
                </Button>
              </Box>

           
        </Box>
      
      </SimpleGrid>
    </Box>
    </Box>
  
    </Box>   
  
         
      
     <Footer/>
      </>
    );
  };
  
  export default SingleProductPage;
  