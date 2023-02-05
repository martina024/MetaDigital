import React from 'react'
import YourCart from '../Component/YourCart'
import YourDetails from '../Component/YourDetails'
import {Container,Flex} from '@chakra-ui/react'

const CheckoutPage = () => {
  return (
    <Container maxWidth="container.xl" p="10">
        <Flex 
        // h={{base:"auto" , md:"100vh"}}
        h={"5vh"}
         py={[0, 10, 20]}
        direction={{
            base:"column-reverse",
            md:"row"
        }}
        >
            <YourDetails/>
            <YourCart/>
        </Flex>
    </Container>
   
  )
}

export default CheckoutPage