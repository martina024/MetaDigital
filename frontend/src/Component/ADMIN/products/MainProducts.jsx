import React from 'react'

import Product from './Product'
import products from "../../../data/Products"
import { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Select,
  Stack,
  HStack,
  IconButton,
  Tooltip,
  Divider,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';



const MainProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };



  return (
    <Box w="100%" maxW="1200px" mx="auto" px={4} py={8}>
      <Stack direction={["column", null, "row"]} align="center" justify="space-between">
        <Heading as="h2" size="lg" className='content-title' mr={[0, null, 4]}>Products</Heading>
        <Link to="/admin/addproduct">
          Create new
        </Link>
      </Stack>
      <Box my={8}>
        <Stack direction={["column", null, "row"]} spacing={4} align="center">
          <Input type="search" placeholder="Search..." className="form-control p-2" />
          <Select value={selectedCategory} onChange={handleCategoryChange} w="max-content">
            <option value="">All category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Others">Something else</option>
          </Select>
          <Select value={selectedSort} onChange={handleSortChange} w="max-content">
            <option value="">Latest added</option>
            <option value="cheap">Cheap first</option>
            <option value="viewed">Most viewed</option>
          </Select>
        </Stack>
      </Box>
      <Divider my={8} />
      <Container maxW="100%" mb={16}>
        <SimpleGrid columns={[1, null, 2]} spacing={8}>
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default MainProducts;




// const MainProducts = () => {
//   return (
//     <section className='content-main'>
//         <div className='content-header'>
//             <h2 className='content-title'>Products</h2>
//             <div>
//                 <Link to="/admin/addproduct">
//                 Create new
//                 </Link>
//             </div>
//         </div>

//         <div className='card mb-4 shadow-sm'>
//             <header className='card-header bg-white'>
//                 <div className='row gx-3 py-3'>
//                     <div col-lg-4 col-md-6 me-auto>
//                         <input type="search" placeholder='Search...' className='form-contron p-2'/>
//                         <div className='col-lg-2 col-6 col-md-3'>
//                             <select className='form-select'>
//                                 <option value="">All category</option>
//                                 <option value="">Electronics</option>
//                                 <option value="">clothings</option>
//                                 <option value="">Something else</option>
//                             </select>
//                         </div>
//                         <div className='col-lg-2 col-6 col-md-3'>
//                             <select className='form-select'>
//                                 <option value="">Latest added</option>
//                                 <option value="">Cheap first</option>
//                                 <option value="">Most viewed</option>
                               
//                             </select>
//                         </div>
                       
//                     </div>
//                 </div>
//             </header>


//             <div>
//                 <div>
//                     {products.map((product)=>(
//                         <Product product={product} key={product._id}/>
//                     ))}
//                 </div>

//                 <nav className='float-end mt-4' aria-label='Page navigation'>
//                     <ul className='pagination'>
//                         <li className='page-item disabled'>
//                             <Link to="#">
//                             Previous
//                             </Link>
//                         </li>
//                         <li className='page-item disabled'>
//                             <Link to="#">
//                             Next
//                             </Link>
//                         </li>
//                         </ul>
//                 </nav>
//             </div>
//         </div>
      
//     </section>
//   )
// }

// export default MainProducts
