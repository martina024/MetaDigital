import { Box,  Image, ListItem, Popover, PopoverBody, PopoverContent, PopoverTrigger, SimpleGrid, Text, UnorderedList,  useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Slider from "react-slick";
import MyCarousel from '../Component/MyCarousel';
import Navbar from '../Component/Navbar';
import Footer from "../Component/Footer"



const Homepage = () => {
  const API = "https://tan-determined-dove.cyclic.app/products"
  
  const images=[
    "https://www.reliancedigital.in/medias/LG-Friday-Carausel-Banner-09-11-202-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTcwM3xpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDhkLzk5MTkxODcyMjI1NTguanBnfDZjYTc5ZjUwZDY3YzZiNjMwODgwOTMyMzBiZDE4OGVhZGEzMDAyNTUyNWNkYjAyYjljNzM2MTU0OTBiZDM1MjU",
    "https://www.reliancedigital.in/medias/Mobile-Days-Carousel-Banner-31-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMTI5ODN8aW1hZ2UvanBlZ3xpbWFnZXMvaGM2L2hhYS85OTU1NTAzNDcyNjcwLmpwZ3w1MzhjZTJmMjM2NjU1MTE4YjRjZmY0MDkzN2Y3MTNmMTEyMTdkODAwZjQ2NGU3ODg1NWU4ZWRjNzBhZWQ1ODkx",
    "https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-31-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w4MzkyM3xpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDcyLzk5NTYyMTY3OTkyNjIuanBnfGMwZDBlY2RjMzI1OWQ0YzQ4YmE3NjRhOWI5NWRjOTAzMjIzNWQxMWFhODQ4Nzc2OTViZTc1ZTVlMDFmNmQ4NDI",
    "https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-25-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMjM4ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDdmL2hhNC85OTUzODIwNjcyMDMwLmpwZ3xlYmE2MjM2OGQxYmI3N2Y2NDRmOWVkZjBiZWU2NjMyMmM3MDU1ZmYyM2MzYzJmZjRmM2IyZWY4NTM1ZGE2MDg5"
  ]

  const images_two=[
    
    "https://www.reliancedigital.in/medias/Apple-HomePod-Pre-Book-CLP-Banner-20-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w5OTMxOHxpbWFnZS9qcGVnfGltYWdlcy9oYmUvaDE2Lzk5NTU1MDMzNDE1OTguanBnfGRlZjE2NGY5ZDNhMTIwMmQ0ZDg5MGJhZDdjZjgzOTQyMGE3NzM1MDc4NjAwNzVhMTA4NzAwOTUxNGNmNmIxNmM",
    "https://www.reliancedigital.in/medias/Redmi-Note-12-5G-Series-CLP-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w1OTM0MnxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaGNlLzk5NTU0OTE3NDE3MjYuanBnfDAzOTZhZTkyNmU3NTA3ODA5MWI0Zjk0YjE3ZTk5OGZlYTkxZTYwZmVkNDg3OTIwMTVmODM2OGVlZDExNzMxNTE",
    "https://www.reliancedigital.in/medias/OnePlus-11-5G-CLP-Banner-01-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w1OTc3OHxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaGM4Lzk5NTY3NTY0NTU0NTQuanBnfDQ4OTI5NWZmZGI5YTI5NDM5YzhhM2YzMWFjN2VjN2MzZGJhNzJhNzVlZTg1YjhiNGUwNGUyNjNlNjA0N2JkNGQ",
    "https://www.reliancedigital.in/medias/Oppo-A78-5G-CLP-Banner-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2ODcwMXxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaGRlLzk5NTA0Nzc1ODIzNjYuanBnfGZlN2ExZmE3YmZjYWQ1ODRjODI0ZDRkYjE4ODljZmU0OTQxMTk1ZTY5Y2MzOTQ0ZGMzY2IxNTYyNjRmMmM1NmI",
    "https://www.reliancedigital.in/medias/jiobook-Banner-1680x320.jpg?context=bWFzdGVyfGltYWdlc3wxMTYxMDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2hhNS85OTU2MjE0OTMxNDg2LmpwZ3wyOGE5ODcwYTUwYmI4ZjllZDc3NjQ4NzQyNGM5MTM0ZmViMjk1ZDVmYmE5Nzk5OTA5NzA4MzNiYzcyMmRjYzIw",
    "https://www.reliancedigital.in/medias/Reliance-JIO-Mart-CLP-Desktop-1365-X-260.jpg?context=bWFzdGVyfGltYWdlc3w2NjE4ODl8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2gwMi85OTU1NDkxMzQ4NTEwLmpwZ3w3MDczZTg4Yzk3ZmVkM2ZkOTY4NDIyN2MxMjdjYjA5YjA5OWM0MzI3OTA0ZThhYTY0OGRhMzRlMDQ4NjgxNDdk"
  ]

  const [products,setProducts]=useState([])
  const [isVisible,setIsVisible] = useState(false);
  const navigate=useNavigate()

  const listenToScroll = () => {
    let heightToHidden = 2500;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll>heightToHidden){
               setIsVisible(true);
    }else{
              setIsVisible(false);
    }
}
useEffect(()=>{
  window.addEventListener('scroll',listenToScroll);
  //for load
  return() => window.removeEventListener('scroll',listenToScroll);
 },[])


  useEffect(() => {
    axios.get(API)
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
    
  }, []);


  
  
  
  
  return (
    <>
      
   <Navbar/>
    <Box bg="gray.100" pb="100px" zIndex={999} pt="90px" display={"flex"} fontFamily="cursive" >
   

      <Box w={["100%","100%","100%"]} ml={["5%","7%","5%"]} >
      <Image w={["95%"]} mt="30px" src="https://www.reliancedigital.in/medias/7.5-Instant-Discount-Citibank-Weekend-Offer-Carousel-Banner-02-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w4NDk3MXxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaGE1Lzk5NTY3NTYzMjQzODIuanBnfGM0MThhNjkyMjQxYjY4NGMzYjBkMmZiZDI1MDkzMjU1M2FjM2I4MTEwZTY3MzQ3M2NkNzQxZmEwMjI2MTI5NzE"/>
      {/* TELEVISION */}
      <Box mt="40px"  >
        <Box >
        <MyCarousel images={images}/>
        </Box>

    

      <Text  as="b"fontSize={["14px","16px","18px"]} >
      
      TELEVISION
      </Text>
      <Box  w="95%" display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='8px'>
      {products.filter(ele=>ele.category==="Telivision").slice(0, 8).map(item=>(
        
        <Box 
        onClick={()=>{navigate(`/product/${item._id}`)}} 
        
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.image}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.brand}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.mrp}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]} >
        <Image h="100%" src="https://www.reliancedigital.in/medias/Trending-in-TVs-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NDYyOHxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDBhLzk5MzkyMDU0MjMxMzQuanBnfGRmODcwYWI0YjUzMjA0NDBhNmQzMjNlZWE3ZGZlYzYzMThlMDBiNWI0ZWE3MzMxYzRjYmYyNGQ1OGU4NjgyNjg"/>
       </Box>
      </Box>
      </Box>


      {/* EARPHONE */}
      <Box mt="40px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
      EARPHONE
     
      </Text>
      <Box w="95%"  display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='8px'>
      {products.filter(ele=>ele.category==="Earphone").slice(0, 8).map(item=>(
        
        <Box 
        
        onClick={()=>{navigate(`/product/${item._id}`)}} 
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.image}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.brand}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.mrp}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]}>
        <Image h="100%" src="https://www.reliancedigital.in/medias/Neckband-True-Wireless-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMjg5OHxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaDE2Lzk5Mzc4OTUwOTYzNTAuanBnfGE1OTcxMTM4NGUyMjU3MmM4NTc4YTI1NThkMmQwOTc1ZDU2N2YwNjRjMWNiZTU2YjZiMzcwOTVkYjc0MzQ4MDc"/>
       </Box>
      </Box>
      </Box>

      <Box mt="60px" boxSizing='border-box' >
        <MyCarousel images={images_two}/>
        </Box>

      

       {/* Mobile */}
       <Box mt="10px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
      MOBILE
      </Text>
      <Box w="95%"  display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='8px'>
      {products.filter(ele=>ele.category==="Mobile").slice(0, 8).map(item=>(
        
        <Box 
        
        onClick={()=>{navigate(`/product/${item._id}`)}} 
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.image}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.brand}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.mrp}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]} >
        <Image h="100%" src="https://www.reliancedigital.in/medias/iPhone-14-Producst-Carousel-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNzQyM3xpbWFnZS9qcGVnfGltYWdlcy9oYTEvaGEyLzk5NDM5NTYxMjc3NzQuanBnfGQ2Njc5NWIyNTgxMDljYWU2NjY3MmM4ZmNhMzJiOTMwNTAwNDA3MWM0ODgwNmM1ZWFhMmVhOGIyNzUwNGNlNzU"/>
       </Box>
      </Box>
      </Box>





       {/* Monitor */}
       <Box mt="40px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
       MONITOR
      </Text>
      <Box w="95%"  display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='8px'>
      {products.filter(ele=>ele.category==="Monitor").slice(0, 8).map(item=>(
        
        <Box 
        
        onClick={()=>{navigate(`/product/${item._id}`)}} 
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.image}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.brand}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.mrp}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]}>
        <Image h="100%" src="https://static3.industrybuying.com/homepage/1646812681Side%20Banner%20electrical.png"/>
       </Box>
      </Box>
      </Box>







       {/* Watch*/}
      <Box mt="40px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
      WATCH
      </Text>
      <Box w="95%"  display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='8px'>
      {products.filter(ele=>ele.category==="Watch").slice(0, 8).map(item=>(
        
        <Box 
        
        onClick={()=>{navigate(`/product/${item._id}`)}} 
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.image}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.brand}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.mrp}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]}>
        <Image h="100%" src="https://www.reliancedigital.in/medias/Smartwatches-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNTEvaGY3Lzk5Mzc4OTUyOTI5NTguanBnfDQ2NzM2YjAxZTkzYmJiMTNlMjk4ODkxNTNlMTczMDcxYzU4NjMzZDZmNWQ3N2I5MGViNmMzZDAwNjExMmUxNTE"/>
       </Box>
      </Box>
      </Box>






      </Box>
      


    </Box>

    <Footer/>
    </>
  )
}

export default Homepage
