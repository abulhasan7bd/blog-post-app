import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "../routes/routesName";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [user] = useState(true);
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
<nav className="w-full px-[2%] h-[80px] fixed top-0    text-white bg-[#343538] flex justify-between items-center z-10">

      {/* Logo */}
      <Link className="text-2xl font-Lato font-bold" to="/">
        PenFlow
      </Link>

      {/* Mobile Menu Button */}
      <button onClick={handleMenu} className="sm:hidden z-30">
        {open ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
      </button>

      {/* Navigation Links */}
      {/* Mobile Overlay */}
      <div
        className={`sm:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white text-black z-20 transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col w-full">
          {routes.map((route, id) => (
            <li
              key={id}
              className="uppercase text-center border-b border-gray-300"
              onClick={handleClose}
            >
              <NavLink
                to={route.path}
                className="block py-4 hover:text-red-300"
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-4 flex flex-col gap-3 ">
          {user ? (
            <>
              <Link to="/signin" onClick={handleClose}>
                <button className="btn btn-neutral uppercase w-full">
                  Login
                </button>
              </Link>
              <Link to="/logout" onClick={handleClose}>
                <button className="btn btn-neutral uppercase w-full">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" onClick={handleClose} className="w-full">
                <button className="btn btn-neutral uppercase w-full">
                  Logout
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex sm:items-center gap-[4rem]">
        <ul className="flex gap-4 text-white">
          {routes.map((route, id) => (
            <li key={id} className="uppercase">
              <NavLink
                to={route.path}
                className="hover:text-red-300 text-[1rem] font-[500]"
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ml-4 flex gap-[3rem] justify-center items-center">
          {user ? (
            <>
              <div className="w-[50px] h-[50px]">
                <img
                  className="w-full h-full rounded-full"
                  src="
              https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </div>
              <Link to="/login">
                <button className="btn btn-neutral uppercase border-red-300 px-[2rem]">
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button className="btn btn-neutral uppercase border-red-300 px-[2rem]">
                  Login
                </button>
              </Link>
              <Link to="/logout">
                <button className="btn btn-neutral uppercase border-red-300 px-[2rem]">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
