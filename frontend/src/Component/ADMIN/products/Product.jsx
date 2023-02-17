import React from 'react'
import { Link } from 'react-router-dom'


import {
    Box,
    Flex,
    Image,
    Text,
    IconButton,
    Tooltip,
  } from "@chakra-ui/react";
  import { FaPen, FaTrash } from "react-icons/fa";
  
  const Product = (props) => {
    const { product } = props;
    return (
      <Box mb={{ base: 4, md: 5 }} w={{ base: "100%", md: "auto" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          p={{ base: 2, md: 3 }}
          maxW={{ base: "250px", md: "300px" }}
        >
          <Box mb={{ base: 2, md: 3 }}>
            <Image src={product.image} alt={product.title} />
          </Box>
          <Box mb={{ base: 2, md: 3 }}>
            <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
              {product.title}
            </Text>
          </Box>
          <Box mb={{ base: 2, md: 3 }}>
            <Text fontSize={{ base: "sm", md: "md" }}>{product.mrp}</Text>
          </Box>
          <Flex justify="space-between" w="100%">
            <Tooltip label="Edit" hasArrow>
              <IconButton
                icon={<FaPen />}
                aria-label="Edit product"
                variant="ghost"
              />
            </Tooltip>
            <Tooltip label="Delete" hasArrow>
              <IconButton
                icon={<FaTrash />}
                aria-label="Delete product"
                variant="ghost"
              />
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export default Product;
  





































// const Product = (props) => {
//     const{product}=props
//   return (
//     <div className='col-md-6 col-sm-6 col-lg-3 mb-5'>
//         <div className='card card-product-grid shadow-s,'>
//             <Link to="#">
//             <img src={product.image} alt="" />
//             </Link>
//             <div>
//                 <Link to="#">{product.title}</Link>
//             </div>
//             <div>
//                 <Link to="#">{product.mrp}</Link>
//             </div>
//             <div className='row'>
//             <Link to={`/admin/product/${product._id}/edit`}>
//                 <i className='fas fa-pen'></i>
//             </Link>
//             <Link to="#">
//                 <i className='fas fa-trash-alt'></i>
//             </Link>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Product
