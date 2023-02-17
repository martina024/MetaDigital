import React from 'react'
import { Link } from 'react-router-dom'
import OrderDetailInfo from './OrderDetailInfo'
import OrderDetailProduct from './OrderDetailProduct'

import { Flex, Select, Button } from "@chakra-ui/react";

const OrderDetailMain = () => {
  return (
    <Flex direction="column" align="center" mt="4">
      <Link href="/admin/orders" fontWeight="bold" fontSize="xl" mb="4">
        Back to Orders
      </Link>

      <Flex direction="column" w={["90%", "80%"]} borderWidth="1px" borderRadius="md" boxShadow="md">
        <Flex
          bg="green.400"
          p="3"
          color="white"
          alignItems={["center", "center", "flex-start"]}
          flexDirection={["column", "column", "row"]}
          justifyContent={["center", "center", "space-between"]}
        >
          <Flex align="center" mb={["2", "2", "0"]}>
            <i className="far fa-calendar-alt mx-2"></i>
            <b className="mx-3">Dec 12 2021</b>
            <br />
            <small className="mx-3">Order Id:1254789653vd2</small>
          </Flex>
          <Flex alignItems="center">
            <Select maxWidth="200px" mr="2">
              <option>Change Status</option>
              <option>Awaiting Payment</option>
              <option>Confirmed</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </Select>
            <Link href="#">
              <i className="fas fa-print"></i>
            </Link>
          </Flex>
        </Flex>

        <Flex direction={["column", "column", "row"]} p="4">
          <Flex w={["100%", "100%", "75%"]}>
            <OrderDetailProduct />
          </Flex>

          {/* payment info */}
          <Flex w={["100%", "100%", "25%"]} mt={["4", "4", "0"]}>
            <Button colorScheme="blue" width="100%">
              MARK AS DELIVERED
            </Button>
          </Flex>
        </Flex>

        <OrderDetailInfo />
      </Flex>
    </Flex>
  );
};

export default OrderDetailMain;

















// const OrderDetailMain = () => {
//   return (
//    <section className='content-main'>
//     <div className='content-header'>
//         <Link to="/admin/orders">
//             Back to Orders
//         </Link>
//     </div>

//     <div className='card'>
//         <header className='card-header p-3 Header-green'>
//             <div className='row align-item-center'>
//                 <div className='col-lg-6 col-md-6'>
//                     <span>
//                         <i className='far fa-calendar-alt mx-2'></i>
//                         <b className='text-white mx-3'> Dec 12 2021</b>
//                     </span>
//                     <br />
//                     <small className='tsxt-white mx-3'>
//                         Order Id:1254789653vd2
//                     </small>
//                 </div>
//                 <div className='col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-item-center'>
//                     <select className='form-select d-inline-block'
//                     style={{maxWidth:"200px"}}
//                     >
//                     <option>Change Status</option>
//                     <option>Awaiting Payment</option>
//                     <option>Confirmed</option>
//                     <option>Shipped</option>
//                     <option>Delivered</option>

//                     </select>
//                     <Link to="#">
//                         <i className='fas fa-print'></i>
//                     </Link>

//                 </div>
//             </div>
//         </header>

//         <div className='card-body'>
//             <OrderDetailInfo/>
//             <div className='row'>
//                 <div className='col-lg-9'>
//                     <div className='table-responsive'>
//                         <OrderDetailProduct/>
//                     </div>
//                 </div>

//                 {/* payment info */}
//                 <div className='col-lg-3'>
//                     <div className='box shadow-sm bg-light'>
//                         <button className='btn btn-dark col-12'>MARK AS DELIVERED</button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>

//    </section>
//   )
// }

// export default OrderDetailMain
