import React from 'react'



import { Box, Grid, Text } from "@chakra-ui/react";

const TopTotal = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="4" mt="4">
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
        <Box
          mr="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="12"
          height="12"
          borderRadius="full"
          bg="primary"
        >
          <i className="text-white fas fa-usd-circle"></i>
        </Box>
        <Box>
          <Text fontSize="md" fontWeight="semibold" mb="2">
            Total Sales
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            $22,678
          </Text>
        </Box>
      </Box>

      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
        <Box
          mr="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="12"
          height="12"
          borderRadius="full"
          bg="primary"
        >
          <i className="text-white fas fa-usd-circle"></i>
        </Box>
        <Box>
          <Text fontSize="md" fontWeight="semibold" mb="2">
            Total Order
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            130
          </Text>
        </Box>
      </Box>

      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
        <Box
          mr="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="12"
          height="12"
          borderRadius="full"
          bg="primary"
        >
          <i className="text-white fas fa-usd-circle"></i>
        </Box>
        <Box>
          <Text fontSize="md" fontWeight="semibold" mb="2">
            Total Products
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            70
          </Text>
        </Box>
      </Box>
    </Grid>
  );
};

export default TopTotal;


























// const TopTotal = () => {
//   return (
//     <div className='row'>
//         <div className='col-lg-4'>
//             <div className='card card-body mb-4 shadow-sm'>
//                 <article className='icontext'>
//                     <span className='icon icon-sm rounded-circle alert-primary'>
//                         <i className='text-primary fas fa-usd-circle'></i>
//                     </span>
//                     <div className='text'>
//                         <h6 className='mb-1'>
//                             Total Sales
//                             <span>$22,678</span>
//                         </h6>
//                     </div>
//                 </article>
//             </div>
//         </div>

//         <div className='col-lg-4'>
//             <div className='card card-body mb-4 shadow-sm'>
//                 <article className='icontext'>
//                     <span className='icon icon-sm rounded-circle alert-primary'>
//                         <i className='text-primary fas fa-usd-circle'></i>
//                     </span>
//                     <div className='text'>
//                         <h6 className='mb-1'>
//                         Total Order
//                             <span>130</span>
//                         </h6>
//                     </div>
//                 </article>
//             </div>
//         </div>

//         <div className='col-lg-4'>
//             <div className='card card-body mb-4 shadow-sm'>
//                 <article className='icontext'>
//                     <span className='icon icon-sm rounded-circle alert-primary'>
//                         <i className='text-primary fas fa-usd-circle'></i>
//                     </span>
//                     <div className='text'>
//                         <h6 className='mb-1'>
//                             Total Products
//                             <span>70</span>
//                         </h6>
//                     </div>
//                 </article>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default TopTotal
