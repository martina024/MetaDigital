import React from 'react'

import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  
  const AddProductmain = () => {
    return (
      <Box maxW="1200px" m="0 auto" p={4}>
        <form>
          <Box>
            <Link to="/admin/products">Go to products</Link>
            <Box d="flex" justifyContent="space-between" alignItems="center">
              <h2>Add Product</h2>
              <Button colorScheme="teal" type="submit">
                Publish now
              </Button>
            </Box>
          </Box>
  
          <Box d={{ md: "flex" }} justifyContent="space-between">
            <Box mb={{ base: 4, md: 0 }} w={{ md: "65%" }} mr={{ md: 4 }}>
              <Box mb={4}>
                <FormControl>
                  <FormLabel>Product title</FormLabel>
                  <Input type="text" placeholder="Type here" required />
                </FormControl>
              </Box>
              <Box mb={4}>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input type="number" placeholder="Type here" required />
                </FormControl>
              </Box>
              <Box mb={4}>
                <FormControl>
                  <FormLabel>Count In Stock</FormLabel>
                  <Input type="number" placeholder="Type here" required />
                </FormControl>
              </Box>
              <Box mb={4}>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    rows="7"
                    type="number"
                    placeholder="Type here"
                    required
                  />
                </FormControl>
              </Box>
              <Box mb={4}>
                <FormControl>
                  <FormLabel>Images</FormLabel>
                  <Input type="number" placeholder="Enter image url" />
                  <Input type="file" />
                </FormControl>
              </Box>
            </Box>
            <Box w={{ md: "35%" }}>
              {/* Other content goes here */}
            </Box>
          </Box>
        </form>
      </Box>
    );
  };
  
  export default AddProductmain;
  























// const AddProductmain = () => {
//   return (
//     <>
//     <section style={{maxWidth:"1200px"}}>
//         <form >
//             <div>
//                 <Link to="/admin/products">
//                     Go to products
//                 </Link>
//                 <h2>Add Product</h2>
//                 <div>
//                     <button type="submit">
//                         Publish now
//                     </button>
//                 </div>
//             </div>

//             <div className='row mb-4'>
//                 <div className='col-xl-8 col-lg-8'>
//                     <div className='card mb-4 shadow-sm'>
//                         <div card-body>
//                             <div className='mb-4'>
//                                 <label> Product title</label>
//                                 <input type="text" placeholder='Type here' required/>
//                             </div>
//                             <div className='mb-4'>
//                                 <label> Price</label>
//                                 <input type="number" placeholder='Type here' required/>
//                             </div>
//                             <div className='mb-4'>
//                                 <label> Count In Stock</label>
//                                 <input type="number" placeholder='Type here' required/>
//                             </div>
//                             <div className='mb-4'>
//                                 <label> Description</label>
//                                 <textarea row="7" type="number" placeholder='Type here' required/>
//                             </div>
//                             <div className='mb-4'>
//                                 <label> Images</label>
//                                 <input type="number" placeholder='Enter image url' />
//                                 <input type="file" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     </section>
      
//     </>
//   )
// }

// export default AddProductmain
