import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Close, Menu } from "../utils/Appicons";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// import { ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  return (
    <div>
      <div className="main ">
        {/* ========================Navbar====================================================================================================== */}
        <div className=" flex  lg:ml-5  w-full">
          <div className="logo  ">
            <Link to={"/"}>
              <div className="img mt-1">
                <img
                  src="../../../images/logo.png"
                  height="50px"
                  width="px"
                  alt="My logo"
                />
              </div>
            </Link>
            <div
              className="font-[Lucida Sans, Lucida Sans Regular, Lucida Grande,
    Lucida Sans Unicode, Geneva, Verdana, sans-serif] font-semibold text-[#015761] text-[12px] md:text-[18px]"
            >
              Navneet Singh/ Front End Developer
            </div>
          </div>

          <div className=" hidden lg:flex justify-center  w-4/6">
            <div className="  lg:flex  w-[30em] justify-between items-center hover:text-[#17bdcf] italic text-[1.2em] font-semibold text-[#024f6b]">
              {/* <li className="">Home</li>
            <span className="">About Me</span> */}
              <Link
                to="/"
                className={`${
                  window.location.pathname === "/"
                    ? " text-red-500  "
                    : "text-[#024f6b] "
                }`}
              >
                About Me
              </Link>
              <Link
                to="/resume"
                className={`${
                  window.location.pathname === "/resume"
                    ? " text-red-500  "
                    : "text-[#024f6b] "
                }`}
              >
                Resume
              </Link>
              <Link
                to="/project"
                className={`${
                  window.location.pathname === "/project"
                    ? " text-red-500  "
                    : "text-[#024f6b] "
                }`}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`${
                  window.location.pathname === "/contact"
                    ? " text-red-500  "
                    : "text-[#024f6b] "
                }`}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white justify-center items-center flex px-6 lg:hidden">
          <div
            className=""
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? <Close /> : <Menu />}
          </div>
        </div>
      </div>
      {menu && (
        <div className="lg:hidden">
          <AnimatePresence>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="z-[15000]"
            >
              <div className="bg-gray-50 h-[190vh] absolute w-full z-[8000]">
                <div
                  className="font-[Lucida Sans, Lucida Sans Regular, Lucida Grande,
    Lucida Sans Unicode, Geneva, Verdana, sans-serif] italic  font-semibold text-[#015761] text-xl"
                >
                  <Link to={"/"}>
                    <div
                      className={`${
                        window.location.pathname === "/"
                          ? "h-[50px] py-3 px-2  mx-1 text-red-500  "
                          : "h-[50px] py-3 px-2 mx-1 "
                      }`}
                      onClick={() => {
                        setMenu(false);
                      }}
                    >
                      {" "}
                      About me
                    </div>
                  </Link>
                  <Link to={"/resume"}>
                    <div
                      className={`${
                        window.location.pathname === "/resume"
                          ? "h-[50px] py-3 px-2 mx-1 text-red-500 "
                          : "h-[50px] py-3 px-2 mx-1 "
                      }`}
                      onClick={() => {
                        setMenu(false);
                      }}
                    >
                      My Resume
                    </div>
                  </Link>
                  <Link to={"/project"}>
                    {" "}
                    <div
                      className={`${
                        window.location.pathname === "/project"
                          ? "h-[50px] py-3 px-2 mx-1 text-red-500 "
                          : "h-[50px] py-3 px-2 mx-1 "
                      }`}
                      onClick={() => {
                        setMenu(false);
                      }}
                    >
                      {" "}
                      My Projects
                    </div>
                  </Link>
                  <Link to={"/contact"}>
                    {" "}
                    <div
                      className={`${
                        window.location.pathname === "/contact"
                          ? "h-[50px] py-3 px-2 mx-1  text-red-500 "
                          : "h-[50px] py-3 px-2  mx-1"
                      }`}
                      onClick={() => {
                        setMenu(false);
                      }}
                    >
                      Contact Me
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Navbar;
