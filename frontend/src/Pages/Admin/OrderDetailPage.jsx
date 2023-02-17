import React from 'react'
import Header from '../../Components/ADMIN/Header'
import OrderDetailMain from '../../Components/ADMIN/order/OrderDetailMain'
import Sidebar from '../../Components/ADMIN/Sidebar'
import { Box, Flex } from "@chakra-ui/react";
const OrderDetailPage = () => {
  return (
    <Flex>
    <Sidebar/>
    <Box flex="1" minHeight="100vh">
      <Header/>
      <OrderDetailMain/>
    </Box>
  </Flex>
  )
}

export default OrderDetailPage
