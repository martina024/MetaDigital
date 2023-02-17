import React from 'react'

import { Flex, Box, Text } from "@chakra-ui/react";

const OrderDetailInfo = () => {
  return (
    <Flex mb="5" wrap="wrap" justifyContent="space-between">
        <Box flex="1" maxW={["100%", "50%"]} mb={["4", "0"]}>
            <Flex alignItems="flex-start">
                <Text color="green.500" fontSize="lg" mr="2" mt="1">
                    <i className="fas fa-user"></i>
                </Text>
                <Box>
                    <Text mb="1" fontSize="md" fontWeight="semibold">Customer</Text>
                    <Text mb="1">User Silbo<br /><a href="mailto:user@exmple.com">user@example.com</a></Text>
                </Box>
            </Flex>
        </Box>


        <Box flex="1" maxW={["100%", "50%", "auto"]} mb={["4", "0"]}>
            <Flex alignItems="flex-start">
                <Text color="green.500" fontSize="lg" mr="2" mt="1">
                    <i className="fas fa-truck-moving"></i>
                </Text>
                <Box>
                    <Text mb="1" fontSize="md" fontWeight="semibold">Order info</Text>
                    <Text mb="1">Shipping: Tanzania<br />Pay method: PayPal</Text>
                </Box>
            </Flex>
        </Box>

        <Box flex="1" maxW={["100%", "50%", "auto"]}>
            <Flex alignItems="flex-start">
                <Text color="green.500" fontSize="lg" mr="2" mt="1">
                    <i className="fas fa-user"></i>
                </Text>
                <Box>
                    <Text mb="1" fontSize="md" fontWeight="semibold">Deliver to</Text>
                    <Text mb="1">Address:<br />Arusha box nagar 25468</Text>
                </Box>
            </Flex>
        </Box>
    </Flex>
  );
};

export default OrderDetailInfo;

















// const OrderDetailInfo = () => {
//   return (
//     <div className='row mb-5 order-info-wrap'>
//         <div className='col-md-6 col-lg-4'>
//             <article className='icontext align-items-start'>
//                 <span className='text-success fas fa-user'>
//                     <i></i>
//                 </span>
//                 <div className='text'>
//                     <h6 className='mb-1'>Customer</h6>
//                     <p className='mb-1'>User Silbo
//                     <br />
//                     <a href="mailto:user@exmple.com">user@example.com</a>
//                     </p>
//                 </div>
//             </article>
//         </div>


//         <div className='col-md-6 col-lg-4'>
//             <article className='icontext align-items-start'>
//                 <span className='text-success fas fa-truck-moving'>
//                     <i></i>
//                 </span>
//                 <div className='text'>
//                     <h6 className='mb-1'>Order info</h6>
//                     <p className='mb-1'>Shipping:Tanzania
//                     <br />
//                     Pay method:PayPal
//                     </p>
//                 </div>
//             </article>
//         </div>

//         <div className='col-md-6 col-lg-4'>
//             <article className='icontext align-items-start'>
//                 <span className='text-success fas fa-user'>
//                     <i></i>
//                 </span>
//                 <div className='text'>
//                     <h6 className='mb-1'>Deliver to</h6>
//                     <p className='mb-1'>Address:
//                     <br />
//                     Arusha box nagar 25468
//                     </p>
//                 </div>
//             </article>
//         </div>
      
//     </div>
//   )
// }

// export default OrderDetailInfo
