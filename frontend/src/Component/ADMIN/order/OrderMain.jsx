import React from 'react'
import Order from './Order'



import {
    Box,
    Flex,
    Input,
    Select,
  } from "@chakra-ui/react";
  
  const OrderMain = () => {
    return (
      <Box as="section" className="content-main">
        <Box className="content-header">
          <h2>Orders</h2>
        </Box>
  
        <Box className="card mb-4 shadow-sm">
          <Box as="header" className="card-header bg-white">
            <Flex direction={{ base: "column", lg: "row" }} alignItems="center" py={3} px={{ base: 2, md: 4 }}>
              <Box flex={{ base: 1, lg: 4 }} mb={{ base: 2, lg: 0 }}>
                <Input type="text" placeholder="Search..." />
              </Box>
              <Box flex={{ base: 1, lg: 2 }} mx={{ base: 0, lg: 3 }}>
                <Select>
                  <option value="">Status</option>
                  <option value="">Active</option>
                  <option value="">Disabled</option>
                  <option value="">Show all</option>
                </Select>
              </Box>
              <Box flex={{ base: 1, lg: 2 }}>
                <Select>
                  <option value="">Show 20</option>
                  <option value="">Show 30</option>
                  <option value="">Show 40</option>
                </Select>
              </Box>
            </Flex>
          </Box>
  
          <Box className="card-body">
            <Box className="table-responsive">
              <Order />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default OrderMain;
  


// const OrderMain = () => {
//   return (
//     <section className='content-main'>
//         <div className='content-header'>
//             <h2>Orders</h2>
//         </div>

//         <div className='card mb-4 shadow-sm'>
//             <header className='card-header bg-white'>
//                 <div  className='row gx-3 py-3'>
//                 <div className='col-lg-4 col-md-6 me-auto'>
//                     <input type="text"  placeholder='Search...'/>
//                 </div>
//                 <div className='col-lg-2 col-6 col-md-3'>
//                 <select>
//                         <option value="">Status</option>
//                         <option value="">Active</option>
//                         <option value="">Disabled</option>
//                         <option value="">Show all</option>
//                     </select>
//                 </div>
//                 <div className='col-lg-2 col-6 col-md-3'>
//                 <select>
//                         <option value="">Show 20</option>
//                         <option value="">Show 30</option>
//                         <option value="">Show 40</option>
                      
//                     </select>
//                 </div>
                    
//                 </div>
//             </header>

//             <div className='card-body'>
//                 <div className='table-responsive'>
//                     <Order/>
//                 </div>
//             </div>
//         </div>
     
//     </section>
//   )
// }

// export default OrderMain
