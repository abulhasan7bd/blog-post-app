import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "../routes/routesName";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutAccout, setUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleMenu = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const [scrolled, setScroled] = useState(false);

  // log out
  const logOut = () => {
    signOutAccout()
      .then(() => {
        console.log("sign out");
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // when scrol
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        console.log(window.scrollY)
        setScroled(true);
      } else {
        setScroled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
     <nav
      className={`w-full sticky top-0 px-[3%] md:px-[2%] 
        text-white bg-[#1E293B] flex justify-between items-center 
        z-50 transition-all duration-300 ${
          scrolled ? "h-[70px]" : "h-[100px]"
        }`}
    >
      {/* Logo */}
      <Link className="text-[1.8rem] font-Lato font-bold" to="/">
        Dev<span className="text-[#38BDF8]">Heps</span>
      </Link>

      {/* Mobile Menu Button */}
      <button onClick={handleMenu} className="sm:hidden z-30">
        {open ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`sm:hidden md:flex fixed ${
          scrolled ? "top-[70px]" : "top-[100px]"
        } left-0 w-full h-[calc(100vh-80px)] bg-white text-black z-20 
        transition-all duration-300 ease-in-out
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
                className="block py-4 hover:text-[#38BDF8]"
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-4 flex flex-col gap-3">
          {user ? (
            <>
              <button
                onClick={() => {
                  logOut();
                  handleClose();
                }}
                className="btn btn-neutral uppercase w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={handleClose}>
                <button className="btn btn-neutral uppercase w-full">
                  Login
                </button>
              </Link>
              <Link to="/register" onClick={handleClose}>
                <button className="btn btn-neutral uppercase w-full">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex sm:items-center lg:gap-[4rem] md:gap-2">
        <ul className="hidden lg:gap-4 text-white md:gap-2 md:hidden lg:flex">
          {routes.map((route, id) => (
            <li key={id} className="uppercase">
              <NavLink
                to={route.path}
                className="hover:text-[#38BDF8] text-[14px] font-[500]"
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="ml-4 flex gap-[3rem] justify-center items-center">
          {user ? (
            <>
              <div className="w-[50px] h-[50px]">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={user.photoURL}
                  alt="User Avatar"
                />
              </div>
              <button
                onClick={logOut}
                className="btn btn-neutral uppercase border-[#38BDF8] px-[2rem]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-neutral uppercase border-[#38BDF8] px-[2rem]">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-neutral uppercase border-[#38BDF8] px-[2rem]">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle in desktop small screens */}
        <button
          onClick={handleMenu}
          className="md:flex ml-[1rem] lg:hidden z-30"
        >
          {open ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
