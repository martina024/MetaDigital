import React, { useEffect } from 'react'
import $ from "jquery"
import { Link } from 'react-router-dom'

import {
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Header = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const toggleAsideMinimize = () => {
    if (window.innerWidth < 768) {
      document.body.classList.remove("aside-mini");
      setIsAsideOpen(false);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  return (
    <Box as="header" d="flex" alignItems="center" p="1rem" borderBottom="1px" borderColor="gray.200">
      <Box flex="1" mr="2">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<MoonIcon />} />
          <Input type="text" list="search_terms" placeholder="Search..." />
          <Box as="datalist" id="search_terms">
            <option value="Products" />
            <option value="New orders" />
            <option value="Apple iphone" />
            <option value="Ahmed Hassan" />
          </Box>
        </InputGroup>
      </Box>
      <Box>
        <IconButton
          aria-label="Aside Toggle Button"
          variant="outline"
          icon={<HamburgerIcon />}
          onClick={toggleAside}
          mr="2"
          display={{ base: "block", md: "none" }}
        />
        <IconButton
          aria-label="Aside Minimize Button"
          variant="outline"
          icon={<HamburgerIcon />}
          onClick={toggleAsideMinimize}
          display={{ base: "none", md: "block" }}
        />
      </Box>
      <Box>
        <Menu isLazy>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <MoonIcon mr="2" />
            Dark Mode
          </MenuButton>
          <MenuList>
            <MenuItem icon={<MoonIcon />} command="⌘D">
              Dark Mode
            </MenuItem>
            <MenuItem icon={<MoonIcon />} command="⌘L">
              Light Mode
            </MenuItem>
          </MenuList>
        </Menu>
        <IconButton aria-label="Notifications" variant="outline" icon={<BellIcon />} ml="2" />
        <Menu isLazy>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} ml="2">
            English
          </MenuButton>
          <MenuList>
            <MenuItem>English</MenuItem>
            <MenuItem>Spanish</MenuItem>
            <MenuItem>French</MenuItem>
          </MenuList>
        </Menu>
        <Menu isLazy>
          <MenuButton>
            <Image
              boxSize="30px"
              borderRadius="full"
              objectFit="cover"
              src="https://via.placeholder.com/30"
              alt="User avatar"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>My Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Exit</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
















// const Header = () => {
//     useEffect(()=>{
//         $("[data-trigger]").on("click",function(e){
//             e.preventDefault()
//             e.stopPropagation()
//             var offcanvas_id=$(this).attr("data-trigger")
//             $(offcanvas_id).toggleClass("show")
//         })
//     })
//     $("btn-aside-minimize").on("click" ,function(){
//       if(window.innerWidth<768){
//         $("body").removeClass("aside-mini")
//         $(".navbar-aside").removeClass("show")
//       }
//       else{
//         $("body").toggleClass("aside-mini")
//       }
//     },[])
//   return (
//     <header className='main-header navbar'>
//       <div className='col-search'>
//         <form className='searchForm'>
//           <div className='input-group'>
//             <input type="text" list='search_terms' placeholder='Search...'/>
//             <button className='btn btn-light bg'>
//               <i className='far fa-search'></i>
//             </button>
//           </div>
//           <datalist id='search_terms'>
//             <option value="Products"></option>
//             <option value="New orders"></option>
//             <option value="Apple iphone"></option>
//             <option value="Ahmed Hassan"></option>
//           </datalist>
//         </form>
//       </div>
//       <div className='col-nav'>
//         <button className='btn btn-icon btn-mobile me-auto'
//         data-trigger="#offcanvas_aside"
//         >
//           <i className='md-28 fas fa-bars'></i>
//         </button>
//         <ul className='nav'>
//           <li className='nav-item'>
//             <Link className='nav-link btn-icon'
//             title='Dark mode' to="#"
//              >
//               <i className='fas fa-moon'></i>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link className='nav-link btn-icon'
//             title='Dark mode' to="#"
//              >
//               <i className='fas fa-bell'></i>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link className='nav-link btn-icon'
//             title='Dark mode' to="#"
//              >
//               English
//             </Link>
//           </li>
//           <li className='dropdown nav-item'>
//             <Link className='dropdown toggle'
//             title='Dark mode' to="#"
//              >
//               <img src="" alt="" />
//             </Link>
//             <div className='dropdown-menu dropdown-menu-end'>
//               <Link to="#">
//                 My profile
//               </Link>
//               <Link to="#">
//                 Settings
//               </Link>
//               <Link to="#">
//                Exit
//               </Link>
//             </div>
//           </li>
//         </ul>
//       </div>
      
//     </header>
//   )
// }

// export default Header
