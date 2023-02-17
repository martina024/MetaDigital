import React from 'react'
import Header from '../../Components/ADMIN/Header'
import MainProducts from '../../Components/ADMIN/products/MainProducts'
import Sidebar from '../../Components/ADMIN/Sidebar'
import { Box, Flex } from "@chakra-ui/react";
const ProductPage = () => {
  return (
    <Flex>
      <Sidebar/>
      <Box flex="1" minHeight="100vh">
        <Header/>
        <MainProducts/>
      </Box>
    </Flex>
  )
}

export default ProductPage
