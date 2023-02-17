import React from 'react'

import { Box, Heading, Image } from "@chakra-ui/react";

const ProductsStatistics = () => {
  return (
    <Box maxW={{ base: "100%", xl: "xl" }} mx="auto" py="8">
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
        <Box p="4">
          <Heading as="h5" size="md" mb="4">
            Products Statistics
          </Heading>
          <Image src="" alt="" w="100%" maxH="950px" objectFit="contain" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsStatistics;





































// const ProductsStatistics = () => {
//   return (
//     <div className='col-xl col-lg-12'>
//     <div className='card mb-4 shadow-sm'>
//         <article className='card-body'>
//             <h5 className='card-title'>Products Statistics</h5>
//             <img src="" alt="" 
//             style={{width:"100%",height:"950px",objectFit:"contain"}}
//             />
//         </article>
//     </div>
  
// </div>
//   )
// }

// export default ProductsStatistics
