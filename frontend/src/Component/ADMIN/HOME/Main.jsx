import React from 'react'


import { Box, Container, Heading } from "@chakra-ui/react";
import TopTotal from "./TopTotal";
import SaleStatistics from "./SaleStatistics";
import ProductsStatistics from "./ProductsStatistics";
import LatestOrder from "./LatestOrder";

function Main() {
  return (
    <>
      <Container maxW="container.lg" as="main">
        <Box className="content-header">
          <Heading as="h2" className="content-title">
            DASHBOARD
          </Heading>
        </Box>
        <TopTotal />

        <Box className="row">
          <SaleStatistics />
          <ProductsStatistics />
        </Box>

        <Box className="card mb-4 shadow-sm">
          <LatestOrder />
        </Box>
      </Container>
    </>
  );
}

export default Main;
























// function Main() {
//     return (
//       <>
//       <section className='content-main'>
//         <div className='content-header'>
//           <h2 className='content-title'>
//             DASHBOARD
//           </h2>
//         </div>
//         <TopTotal/>
  
//         <div className='row'>
//           <SaleStatistics/>
//           <ProductsStatistics/>
//         </div>
  
//         <div className='card mb-4 shadow-sm'>
//           <LatestOrder/>
//         </div>
//       </section>
        
//       </>
//     )
//   }