import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-[#313131] sticky top-0 z-50">
      <ul className="flex justify-end m-sm:justify-center text-xl m-sm:text-sm font-bold font-Kanit space-x-8 m-sm:space-x-4 py-4 mx-20">
        <Link
          activeClass="activeLink"
          spy
          smooth
          to="introduction"
          className="cursor-pointer"
        >
          Introduction
        </Link>
        <Link
          activeClass="activeLink"
          spy
          smooth
          to="portfolio"
          className="cursor-pointer"
        >
          Portfolio
        </Link>
        <Link
          activeClass="activeLink"
          spy
          smooth
          to="skills"
          className="cursor-pointer"
        >
          Skills
        </Link>
        <Link
          activeClass="activeLink"
          spy
          smooth
          to="contact"
          className="cursor-pointer"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
