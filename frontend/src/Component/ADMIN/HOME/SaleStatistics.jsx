import React from 'react'



import { Box, Heading, Image } from "@chakra-ui/react";

const SaleStatistics = () => {
  return (
    <Box mb={{base: "2", md: "4"}}>
      <Box boxShadow="sm" rounded="md" overflow="hidden">
        <Box as="article">
          <Heading as="h5" fontSize={{base: "md", md: "lg"}} p="4">
            Sale Statistics
          </Heading>
          <Image src="" alt="" objectFit="contain" />
        </Box>
      </Box>
    </Box>
  );
};

export default SaleStatistics;
































// const SaleStatistics = () => {
//   return (
//     <div className='col-xl col-lg-12'>
//         <div className='card mb-4 shadow-sm'>
//             <article className='card-body'>
//                 <h5 className='card-title'>Sale Statistics</h5>
//                 <img src="" alt="" 
//                 style={{width:"100%",height:"950px",objectFit:"contain"}}
//                 />
//             </article>
//         </div>
      
//     </div>
//   )
// }

// export default SaleStatistics
