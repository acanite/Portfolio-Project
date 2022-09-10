import React, { useState } from "react";
import logo from "../../assets/housify.png";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="Header bg-zinc-900 w-full">
      <div className="max-w-[1440px] mx-auto py-6 px-10 flex justify-between">
        <div>
          <a className="" href="/">
            <img className="h-8 w-70" src={logo} alt="Housify-logo" />
          </a>
        </div>
        <div className="hidden md:flex">
          <nav className="flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/property"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Property
            </NavLink>
            <NavLink
              to="/agent"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Agent
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Blog
            </NavLink>

            <button className="">
              <NavLink className="" to="/UserForm">
                Get Started
              </NavLink>
            </button>
          </nav>
        </div>

        {/* Hamburger menu */}
        <div
          onClick={handleNav}
          className="block md:hidden mr-0 p-2 rounded-2xl hover:bg-purple-700 duration-300"
        >
          {nav ? (
            <AiOutlineClose size={30} className="" />
          ) : (
            <AiOutlineMenu size={30} className="" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full left-0 flex justify-center text-center bg-zinc-900 top-[80px] absolute z-10"
              : "absolute left-[-100%]"
          }
        >
          <nav className="pb-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/property"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Property
            </NavLink>
            <NavLink
              to="/agent"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Agent
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 block p-3 text-xl navlink"
                  : "block p-3 text-xl navlink"
              }
            >
              Blog
            </NavLink>

            <button className="block m-4 ">
              <NavLink className="" to="/UserForm">
                Get Started
              </NavLink>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
