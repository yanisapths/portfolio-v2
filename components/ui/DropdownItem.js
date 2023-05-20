import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const DropdownItem = ({ handleScroll }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="fixed top-24 md:top-28 z-50 w-full bg-black shadow-xl">
      <nav className="flex text-sm items-center justify-between py-3 px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="text-lg font-bold">Contents</div>
        <IconButton
          className="block md:hidden lg:hidden xl:hidden"
          color="inherit"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}

          sx={
            {  "& .MuiMenu-paper": 
              { backgroundColor: "black", color: "white",width:"100%"}, 
            }
          }
        >
          <MenuItem onClick={handleScroll}>
            {" "}
            <Link href="#section-0">1.Overview</Link>
          </MenuItem>
          <MenuItem onClick={handleScroll}>
            {" "}
            <Link href="#section-1" onClick={handleScroll}>
              2.Process
            </Link>
          </MenuItem>
          <MenuItem onClick={handleScroll}>
            {" "}
            <Link href="#section-2">3.Customer Application</Link>
          </MenuItem>
          <MenuItem onClick={handleScroll}>
            <Link href="#section-3">4.Clinic Management</Link>
          </MenuItem>
          <MenuItem onClick={handleScroll}>
            <Link href="#section-4">5.Media</Link>
          </MenuItem>
        </Menu>
        <ul className="hidden md:flex md:items-center md:w-auto">
          <li className="text-gray-100 hover:text-gray-300 font-medium mt-3 md:mt-0 md:ml-4">
            <Link href="#section-0" onClick={handleScroll}>
              1. Overview
            </Link>
          </li>
          <li className="text-gray-100 hover:text-gray-300 font-medium mt-3 md:mt-0 md:ml-4">
            <Link href="#section-1" onClick={handleScroll}>
              2. Process
            </Link>
          </li>
          <li className="text-gray-100 hover:text-gray-300 font-medium mt-3 md:mt-0 md:ml-4">
            <Link href="#section-2" onClick={handleScroll}>
              3. Customer Application
            </Link>
          </li>
          <li className="text-gray-100 hover:text-gray-300 font-medium mt-3 md:mt-0 md:ml-4">
            <Link href="#section-3" onClick={handleScroll}>
              4. Clinic Management
            </Link>
          </li>
          <li className="text-gray-100 font-medium mt-3 md:mt-0 md:ml-4">
            <Link href="#section-4" onClick={handleScroll}>
              5. Media
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DropdownItem;
