import React from 'react'
import { Link } from 'react-router-dom'



import {
    Box,
    Heading,
    Table,
    Tbody,
    Tr,
    Td,
    
  } from "@chakra-ui/react";
  
  const LatestOrder = () => {
    return (
      <Box>
        <Heading as="h5" size="sm" mb="2">
          Latest Orders
        </Heading>
        <Table size="sm">
          <Tbody>
            <Tr>
              <Td fontWeight="bold">User</Td>
              <Td>user@example.com</Td>
              <Td>$345</Td>
              <Td>
                <Box>
                  <span>Paid At Today at 10:13 Am</span>
                </Box>
              </Td>
              <Td>Tpday at 10:13 Am</Td>
              <Td textAlign="right">
                <Link to="/admin/order">
                  <i className="fas fa-eye"></i>
                </Link>
              </Td>
            </Tr>
  
            {/* not paid */}
            <Tr>
              <Td fontWeight="bold">User</Td>
              <Td>user@example.com</Td>
              <Td>$345</Td>
              <Td>
                <Box>
                  <span>Created At Today at 10:13 Am</span>
                </Box>
              </Td>
              <Td>Tpday at 10:13 Am</Td>
              <Td textAlign="right">
                <Link to="/admin/order">
                  <i className="fas fa-eye"></i>
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    );
  };
  
  export default LatestOrder;
  









































{/* <div className='card-body'>
<h5 className='card-title'>Latest Orders</h5>
<div className='table-responsive'>
  <table className='table'>
      <tbody>
          <tr>
              <td>
                  <b>User</b>
              </td>
              <td>user@example.com</td>
              <td>$345</td>
              <td>
                  <span>Paid At Today at 10:13 Am</span>
              </td>
              <td>
                  Tpday at 10:13 Am
              </td>
              <td className='d-flex justify-content-end align-item-center'>
                  <Link to="/admin/order">
                      <i className='fas fa-eye'></i>
                  </Link>
              </td>
          </tr>

          {/* not paid */}
        //   <tr>
        //       <td>
        //           <b>User</b>
        //       </td>
        //       <td>user@example.com</td>
        //       <td>$345</td>
        //       <td>
                  {/* <span>Created At Today at 10:13 Am</span>
              </td>
              <td>
                  Tpday at 10:13 Am
              </td>
              <td className='d-flex justify-content-end align-item-center'>
                  <Link to="/admin/order">
                      <i className='fas fa-eye'></i>
                  </Link>
              </td>
          </tr>

      </tbody>
  </table>
</div>
</div>  */}
