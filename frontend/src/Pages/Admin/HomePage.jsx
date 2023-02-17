import React from 'react'
import Header from '../../Components/ADMIN/Header'
import Main from '../../Components/ADMIN/HOME/Main';
import Sidebar from '../../Components/ADMIN/Sidebar'
import { Box, Flex } from "@chakra-ui/react";


const HomePage = () => {
  return (
    <Flex>
     <Sidebar/>
     <Box flex="1" minHeight="100vh">
        <Header/>
        <Main/>
        </Box> 
    </Flex>
  )
}

export default HomePage
