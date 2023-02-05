import { Box, Divider, ListItem, Popover, PopoverBody, PopoverContent, PopoverTrigger, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    
  return (
   
  <>
      
      <Box bg="white" display={["none","none","flex"]} py="20px" alignItems={"center"} justifyContent="center" >
      <UnorderedList listStyleType="none"  spacing={4} >
      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
               <Link to="/allproducts">
                <Box w="100%" style={{ cursor: 'pointer'}} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"} >All Products</Box>
                </Link>
            </PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.500" color="white"  borderRadius="0px">
           
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>
        
      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
            <Link to="/allproducts">
               <Box w="100%" style={{ cursor: 'pointer'}} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"} >Earphone</Box>
               </Link>
            </PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.500" color="white"  borderRadius="0px">
            <PopoverBody>
               <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >BOAT</ListItem>
                      <ListItem >HAMMER</ListItem>
                      <ListItem >pTRON</ListItem>
                      <ListItem >REALME</ListItem>
                      <ListItem >ONE PLUS</ListItem>
                      <ListItem >NOTHING1</ListItem>
                      
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
                
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>
           
      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
            <Link to="/allproducts">
               <Box w="100%" style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"}>Speaker</Box>
               </Link>
           </PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.600" color="white"  borderRadius="0px">
            <PopoverBody>
               <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >BOAT</ListItem>
                     
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
                
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>



      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
            <Link to="/allproducts">
               <Box w="100%" style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"}>Telivision</Box>
               </Link>
            </PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.600" color="white"  borderRadius="0px">
            <PopoverBody>
               <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >HISENSE</ListItem>
                      <ListItem >IFFALCON</ListItem>
                      <ListItem >ITEL</ListItem>
                      <ListItem >TCL</ListItem>
                      <ListItem >ONEPLUS</ListItem>
                      <ListItem >KODAK</ListItem>
                      
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
                
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>




      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
            <Link to="/allproducts">
               <Box w="100%" style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"}>Monitor</Box>
               </Link>
           </PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.600" color="white"  borderRadius="0px">
            <PopoverBody>
               <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >ZEBRONICS</ListItem>
                      <ListItem >ENTER</ListItem>
                      <ListItem >ACER</ListItem>
                      
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
                
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>





      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
            <Link to="/allproducts">
               <Box w="100%" style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"}>Mobile</Box>
               </Link>
            </PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.600" color="white"  borderRadius="0px">
            <PopoverBody>
               <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >APPLE</ListItem>
                     
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
                
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>





      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
            <Link to="/allproducts">
               <Box w="100%" style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"}>Kitchen</Box>
               </Link>
            </PopoverTrigger>

            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.600" color="white"  borderRadius="0px">
            <PopoverBody>
               <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >BAJAJ</ListItem>
                      <ListItem >PHILLIPS</ListItem>
                     
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
                
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>




      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
            <Link to="/allproducts">
               <Box w="100%" style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"}>Dailyuse</Box>
            
               </Link></PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.600" color="white"  borderRadius="0px">
            <PopoverBody>
               <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >PHILLIPS</ListItem>
                      <ListItem >NOVA</ListItem>
                      
                    
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
                
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>




      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
            <Link to="/allproducts">
               <Box w="100%" style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} fontFamily="heading" fontSize={"larger"}>Watch</Box>
               </Link>
            </PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.600" color="white"  borderRadius="0px">
            <PopoverBody>
               <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >pTRON</ListItem>
                      <ListItem >BOAT</ListItem>
                      <ListItem >HAMMER</ListItem>
                      <ListItem >NOISE</ListItem>
                    
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
                
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>

  
      </UnorderedList>
      </Box>
      
  </>
  )
}

export default Menu
