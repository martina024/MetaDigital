import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import {FaHome, FaCartPlus,FaList,FaShoppingBag,FaUser,FaStoreAlt,FaDollarSign } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="white" w={["100%", "16rem"]} h="100vh" boxShadow="base">
      <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
        <Link to="/" className="brand-wrap">
          <img src="" alt="" style={{ height: "46" }} />
        </Link>
        <button className="btn btn-icon btn-aside-minimize">
          <i className="text-muted fas fa-stream"></i>
        </button>
      </Box>
      <List spacing={3} mt={3}>
        <ListItem>
          <Link to="/admin" className="menu-link" exact={true} activeClassName="active">
            <ListIcon as={FaHome} />
            <Text ml={3}>Dashboard</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/admin/product" className="menu-link" exact={true} activeClassName="active">
            <ListIcon as={FaCartPlus} />
            <Text ml={3}>Add Product</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/admin/categories" className="menu-link" exact={true} activeClassName="active">
            <ListIcon as={FaList} />
            <Text ml={3}>Categories</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/admin/orders" className="menu-link" exact={true} activeClassName="active">
            <ListIcon as={FaShoppingBag} />
            <Text ml={3}>Orders</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/admin/users" className="menu-link" exact={true} activeClassName="active">
            <ListIcon as={FaUser} />
            <Text ml={3}>Users</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/admin/sellers" className="menu-link" exact={true} activeClassName="active">
            <ListIcon as={FaStoreAlt} />
            <Text ml={3}>Sellers</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/admin/transaction" className="menu-link" exact={true} activeClassName="active">
            <ListIcon as={FaDollarSign} />
            <Text ml={3}>Transaction</Text>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;































// const Sidebar = () => {
//   return (
//     <div>
//         <aside>
//             <div >
//                 <Link to="/" className='brand-wrap'>
//                     <img src="" alt="" 
//                     style={{height:"46"}}/>
//                 </Link>
//                 <div>
//                 <button className='btn btn-icon btn-aside-minimize'>
//                 <i className='text-muted fas fa-stream'></i>
//                 </button>
//                 </div>
              
//             </div>
//             <nav>
//                 <ul className='menu-aside'>
//                     <li className='menu-item'>
//                         <NavLink
//                         activeClassName="active"
//                         className={"menu-link"}
//                         to="/admin"
//                         exact={true}
//                         >
//                         <i className='icon fas fa-home'></i>
//                         <span className='text'>Dashboard</span>
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink
//                         activeClassName="active"
//                         className={"menu-link"}
//                         to="/admin/product"
//                         exact={true}
//                         >
//                         <i className='icon fas fa-cart-plus'></i>
//                         <span className='text'>Add Product</span>
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink
//                         activeClassName="active"
//                         className={"menu-link"}
//                         to="/admin/categories"
//                         exact={true}
//                         >
//                         <i className='icon fas fa-list'></i>
//                         <span className='text'>Categories</span>
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink
//                         activeClassName="active"
//                         className={"menu-link"}
//                         to="/admin/orders"
//                         exact={true}
//                         >
//                         <i className='icon fas fa-bags-shopping'></i>
//                         <span className='text'>Orders</span>
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink
//                         activeClassName="active"
//                         className={"menu-link"}
//                         to="/admin/users"
//                         exact={true}
//                         >
//                         <i className='icon fas fa-user'></i>
//                         <span className='text'>Users</span>
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink
//                         activeClassName="active"
//                         className={"menu-link"}
//                         to="/admin/sellers"
//                         exact={true}
//                         >
//                         <i className='icon fas fa-store-alt'></i>
//                         <span className='text'>Sellers</span>
//                         </NavLink>
//                     </li>
//                     <li className='menu-item'>
//                         <NavLink
//                         activeClassName="active"
//                         className={"menu-link"}
//                         to="/admin/transaction"
//                         exact={true}
//                         >
//                         <i className='icon fas fa-usd-circle'></i>
//                         <span className='text'>Transaction</span>
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>
            
//         </aside>
      
//     </div>
//   )
// }

// export default Sidebar
