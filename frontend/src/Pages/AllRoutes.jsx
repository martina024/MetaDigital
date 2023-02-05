import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import AdminAllProducts from './Admin/AdminAllProducts'
// import AdminDashboard from './Admin/AdminDashboard'
// import AdminLogin from './Admin/AdminLogin'
// import AdminPrivateRoutes from './Admin/AdminPrivateRoute'
// import AdminSignup from './Admin/AdminSignup'
import CartPage from './CartPage'
import CheckoutPage from './CheckoutPage'

import Homepage from './Homepage'

// import Payment from './Payment'
import PrivateRoute from './PrivateRoute'
import ProductPage from './ProductPage'
import SingleProductPage from './SingleProductPage'


// import UserLogin from './User/UserLogin'
// import UserSignup from './User/UserSignup'

const AllRoutes = () => {

  return (
   
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/allproducts" element={<ProductPage/>} />
            <Route path="/product/:id" element={<SingleProductPage/>} />
            <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>} />
            <Route path="/cart/checkout" element={<PrivateRoute><CheckoutPage/></PrivateRoute>} />
            {/* <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} /> */}
            {/* <Route path="/login" element={<UserLogin/>} /> */}
            {/* <Route path="/signup" element={<UserSignup/>} /> */}
            {/* <Route path="/admin/login" element={<AdminLogin/>} /> */}
            {/* <Route path="/admin/signup" element={<AdminSignup/>} /> */}
            {/* <Route path="/admin/dashboard" element={<AdminPrivateRoutes><AdminDashboard/></AdminPrivateRoutes>} /> */}
            {/* <Route path="/admin/allproducts" element={<AdminPrivateRoutes><AdminAllProducts/></AdminPrivateRoutes>} /> */}
        </Routes>
      
   
  )
}

export default AllRoutes
