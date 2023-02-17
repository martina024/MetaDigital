import React from 'react'
import { Link } from 'react-router-dom'



import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

export default function Order() {
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Total</Th>
            <Th>Paid</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th className="text-end">Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>
              <b>Women red Heels Sandal</b>
            </Td>
            <Td>user@example.com</Td>
            <Td>$45,789</Td>
            <Td>
              <span>Paid At Today 23:56Am</span>
            </Td>
            <Td>Dec 12 2022</Td>
            <Td>
              <span>Delivered</span>
            </Td>
            <Td className="d-flex justify-content-end align-item-center">
              <Link to="/admin/order">
                <i className="fas fa-eye"></i>
              </Link>
            </Td>
          </Tr>

          {/* not paid */}
          <Tr>
            <Td>
              <b>Women red Heels Sandal</b>
            </Td>
            <Td>user@example.com</Td>
            <Td>$45,789</Td>
            <Td>
              <span>Not paid</span>
            </Td>
            <Td>Dec 12 2022</Td>
            <Td>
              <span>Not Delivered</span>
            </Td>
            <Td className="d-flex justify-content-end align-item-center">
              <Link to="/admin/order">
                <i className="fas fa-eye"></i>
              </Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}






















// export default function Order() {
//   return (
//     <table className='table'>
//         <thead>
//             <tr>
//                 <th scope='col'>Name</th>
//                 <th scope='col'>Email</th>
//                 <th scope='col'>Total</th>
//                 <th scope='col'>Paid</th>
//                 <th scope='col'>Date</th>
//                 <th>Status</th>
//                 <th scope='col' className='text-end'>Action</th>
//             </tr>
//         </thead>

//         <tbody>
//             <tr>
//                 <td>
//                     <b>Women red Heels Sandal</b>
//                 </td>
//                 <td>user@example.com</td>
//                 <td>$45,789</td>
//                 <td>
//                     <span>Paid At Today 23:56Am</span>
//                 </td>
//                 <td>Dec 12 2022</td>
//                 <td>
//                     <span>Deliverd</span>
//                 </td>
//                 <td className='d-flex justify-content-end align-item-center'>
//                     <Link to="/admin/order">
//                     <i className='fas fa-eye'></i></Link>
//                 </td>
//             </tr>


//             {/* not paid */}
//             <tr>
//                 <td>
//                     <b>Women red Heels Sandal</b>
//                 </td>
//                 <td>user@example.com</td>
//                 <td>$45,789</td>
//                 <td>
//                     <span>Not paid</span>
//                 </td>
//                 <td>Dec 12 2022</td>
//                 <td>
//                     <span> Not Deliverd</span>
//                 </td>
//                 <td className='d-flex justify-content-end align-item-center'>
//                     <Link to="/admin/order">
//                     <i className='fas fa-eye'></i></Link>
//                 </td>
//             </tr>

//         </tbody>
//     </table>
//   )
// }
