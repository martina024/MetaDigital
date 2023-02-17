import React from 'react'
import Header from '../../Components/ADMIN/Header'
import AddProductmain from '../../Components/ADMIN/products/AddProductmain'
import Sidebar from '../../Components/ADMIN/Sidebar'
import { Box, Flex } from "@chakra-ui/react";
const AddProduct = () => {
  return (
    
  

    <Flex>
      <Sidebar />
      <Box flex="1" minHeight="100vh">
        <Header />
        <AddProductmain />
      </Box>
    </Flex>

  )
}

export default AddProduct
