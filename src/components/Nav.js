import { useEffect, useState } from "react";
import Logo from "../images/logojohndoe.png";
import { RiMenuLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Link as RsLink } from "react-scroll";
import Toggle from "./Toggle";
import Link from 'next/link';

function Nav() {
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const changeBackground = () => {
    // if (window.scrollY >= 50) {
    //   setNavbar(true);
    // } else {
    //   setNavbar(false);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <motion.div
      // initial={{ position: "relative" }}
      // animate={
      //   navbar ? { position: "sticky", top: 0 } : { position: "relative" }
      // }
    >
      <div
        className={
          navbar
            ? "stickyNavbarStyles dark:bg-gray-900"
            : "flex bg-[#F6F8FB] items-center  dark:bg-gray-900 justify-between w-full py-8 px-8 sm:px-16 z-50"
        }
      >
        <RsLink
          to="Home"
          smooth={true}
          offset={-110}
          duration={200}
          activeClass="active"
          className="flex items-center space-x-3 cursor-pointer dark:bg-gray-900"
        >
          <h3 className="dark:bg-gray-900 text-2xl text-[#5C637C] font-light hidden md:flex">
            <span className="font-semibold dark:bg-gray-900">PotatoDev</span>
          </h3>
        </RsLink>
        <div className="flex dark:bg-gray-900  text-[#5C637C] items-center space-x-3">
          <div className="items-center hidden space-x-4 dark:bg-gray-900 lg:flex mr-5">
            <Link className="navLink" href="/">Whoami</Link>
            {/* <RsLink
              to="Home"
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              activeClass="activeDISABLE"
              className="navLink"
            >
              Home
            </RsLink> */}
            {/* <div className="flex justify-center z-1000">
              <div onMouseLeave={() => setOpen(false)} className="dark:bg-gray-900 navLink relative">
                <button
                  onMouseOver={() => setOpen(true)}
                  className="flex items-center rounded-md"
                >
                  <span className="">Whoami</span>
                </button>
                <ul
                  className={`absolute right-0 w-40 py-2 mt-2 rounded-lg  ${
                    open ? "block" : "hidden"
                  }`}
                >
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100  dark:bg-gray-900 bg-white rounded-md">
                    <RsLink
                      to="Experience"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      activeClass="active"
                      className="dark:bg-gray-900 navLink2"
                    >
                      Experience
                    </RsLink>
                  </li>
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 dark:bg-gray-900 bg-white rounded-md">
                    <RsLink
                      to="Certifications"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      activeClass="active"
                      className="dark:bg-gray-900 navLink2"
                    >
                      Certifications
                    </RsLink>
                  </li>
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100  dark:bg-gray-900 bg-white rounded-md">
                    <RsLink
                      to="Education"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      activeClass="active"
                      className="dark:bg-gray-900 navLink2"
                    >
                      Education
                    </RsLink>
                  </li>
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 dark:bg-gray-900 bg-white rounded-md">
                    <RsLink
                      to="Projects"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      activeClass="active"
                      className="dark:bg-gray-900 navLink2"
                    >
                      Projects
                    </RsLink>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <RsLink
              to="asd"
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              activeClass="active"
              className="navLink"
            >
              <div>
                <Link href="/research">Research</Link>
              </div>
            </RsLink> */}
            <Link className="navLink" href="/research">Research</Link>
            <Link className="navLink" href="/blog">Blog</Link>
            {/* <RsLink
              to="asd"
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              activeClass="active"
              className="navLink"
            >
              Blog
            </RsLink> */}
          </div>
          {/* <Toggle /> */}
          <button
            className="lg:hidden dark:bg-gray-900 bg-white border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none font-medium text-[#5C637C] p-3.5 rounded-lg text-xl"
            onClick={() => setSidebar(true)}
          >
            <RiMenuLine />
          </button>
        </div>
      </div>

      <motion.div
        className="fixed top-0 z-50 flex items-center w-full h-screen dark:bg-gray-900 lg:hidden"
        initial={{ opacity: 0, x: "-100%" }}
        animate={sidebar ? "open" : "closed"}
        variants={variants}
      >
        <div className=" dark:bg-gray-900 flex items-center h-screen px-4 w-80 sm:w-96 bg-[#F6F8FB] flex-col overflow-y-scroll hide-scrollbar shadow-2xl bg-opacity-60 backdrop-filter backdrop-blur-md">
          <div className="flex items-center justify-between w-full py-8 dark:bg-gray-900">
            <div className="flex items-center space-x-2 dark:bg-gray-900">
              {/* <img src={Logo} alt="John Doe" className="w-10 sm:w-12" /> */}
              <h3 className="dark:bg-gray-900 text-xl text-[#5C637C] font-light">
                <span className="font-semibold">PotatoDev</span>
              </h3>
            </div>

            <button
              className="dark:bg-gray-900 lg:hidden bg-white border border-transparent hover:shadow-md hover:border-gray-200  focus:outline-none font-medium text-gray-500 p-3.5 rounded-lg text-xl"
              onClick={() => setSidebar(false)}
            >
              <IoMdClose />
            </button>
          </div>

          {/* Mobile First Menu */}
          <div className="flex flex-col items-center w-full py-5 space-y-2 dark:bg-gray-900">
            <RsLink
              to="Home"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className=" dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Home
            </RsLink>
            <RsLink
              to="Education"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Education
            </RsLink>
            <RsLink
              to="Experience"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Experience
            </RsLink>
            <RsLink
              to="Certifications"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Certifications
            </RsLink>

            <RsLink
              to="Projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 sidebar-link"
              onClick={() => setSidebar(false)}
            >
              Projects
            </RsLink>
          </div>
        </div>

        <div
          className="flex-grow h-screen bg-black bg-opacity-25 dark:bg-gray-900"
          onClick={() => setSidebar(false)}
        ></div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
