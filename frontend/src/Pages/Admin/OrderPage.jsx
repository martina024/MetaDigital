import React from 'react'
import Header from '../../Components/ADMIN/Header'
import OrderMain from '../../Components/ADMIN/order/OrderMain'
import Sidebar from '../../Components/ADMIN/Sidebar'
import { Box, Flex } from "@chakra-ui/react";
const OrderPage = () => {
  return (
    <Flex>
      <Sidebar/>
      <Box flex="1" minHeight="100vh">
        <Header/>
        <OrderMain/>
      </Box>
    </Flex>
  )
}

export default OrderPage
