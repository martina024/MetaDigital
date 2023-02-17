import React from 'react'
import { Link } from "react-router-dom";

import { Box, Flex,Stack, Table, Tbody, Td, Th, Thead, Tr, Divider } from "@chakra-ui/react";

const OrderDetailProduct = () => {
  return (
    <Box overflowX="auto">
      <Table variant="striped" borderWidth="1px">
        <Thead>
          <Tr>
            <Th width={{ base: "60%", md: "40%" }}>Product</Th>
            <Th width={{ base: "20%", md: "20%" }}>Unit Price</Th>
            <Th width={{ base: "20%", md: "20%" }}>Quantity</Th>
            <Th width={{ base: "0%", md: "20%" }}>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Link href="#">
                <Flex alignItems="center">
                  <Box
                    as="img"
                    src=""
                    alt=""
                    width={{ base: "30px", md: "40px" }}
                    height={{ base: "30px", md: "40px" }}
                    mr={{ base: "2", md: "4" }}
                  />
                  <Box>Sneakers for boys and girls</Box>
                </Flex>
              </Link>
            </Td>
            <Td width={{ base: "20%", md: "20%" }}>$586</Td>
            <Td width={{ base: "20%", md: "20%" }}>3</Td>
            <Td width={{ base: "0%", md: "20%" }} textAlign="end">$2534</Td>
          </Tr>
        </Tbody>
      </Table>
      <Divider my={4} />
      <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 4, md: 8 }}>
        <Box>
          <dl>
            <Box as="dt">Subtotal:</Box>
            <Box as="dd">$3556</Box>
          </dl>
          <dl>
            <Box as="dt">Shipping Cost:</Box>
            <Box as="dd">$56556</Box>
          </dl>
          <dl>
            <Box as="dt">Grand total:</Box>
            <Box as="dd">
              <Box as="b" fontSize="xl">
                $2,526
              </Box>
            </Box>
          </dl>
        </Box>
        <Box>
          <dl>
            <Box as="dt" color="gray.500">
              Status:
            </Box>
            <Box as="dd">
              <Box as="span">Payment done</Box>
            </Box>
          </dl>
        </Box>
      </Stack>
    </Box>
  );
};

export default OrderDetailProduct;



// const OrderDetailProduct = () => {
//   return (
//     <table className='table border table-lg'>
//     <thead>
//         <tr>
//             <th style={{width:"40%"}}>Product</th>
//             <th style={{width:"20%"}}>Unit Price</th>
//             <th style={{width:"20%"}}>Quantity</th>
//             <th style={{width:"20%"}}>Total</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>
//                 <Link to="#">
//                 <div className='left'>
//                     <img src="" alt="" style={{width:"40px", height:"40px"}}/>
//                 </div>
//                 <div>
//                     Sneakers for boys and girls{" "}
//                 </div>
//                 </Link>
//             </td>
//             <td>$586</td>
//             <td>3</td>
//             <td className='text-end'>$2534</td>
//         </tr>

//             <tr>
//                 <td className='4'>
//                     <article className='float-end'>
//                         <dl className='d-list'>
//                             <dt>Subtotal:</dt><dd>$3556</dd>
//                         </dl>
//                         <dl className='d-list'>
//                             <dt>Shipping Cost:</dt><dd>$56556</dd>
//                         </dl>
//                         <dl className='d-list'>
//                             <dt>Grand total:</dt><dd>
//                                 <b className='h5'>$2,526</b>
//                             </dd>
//                         </dl>
//                         <dl className='d-list'>
//                             <dt className='tsxt-muted'>Status:</dt><dd>
//                                 <span>Payment done</span>
//                             </dd>
//                         </dl>
//                     </article>
//                 </td>
//             </tr>
//     </tbody>
// </table>
//   )
// }

// export default OrderDetailProduct
