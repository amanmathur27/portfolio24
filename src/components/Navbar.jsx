"use client";

import { useState } from "react";
import { navLinks, socialLinks } from "@/constants";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { close, menu } from "@/assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-backgnd mb-10 block items-center`}
    >
      <nav
        className={`flex justify-between sm:mx-32 mx-6 sm:px-16 px-6 sm:py-5 py-4 items-center`}
      >
        <div className="text-ghostWhite text-3xl font-semibold animate-pulse">
          <h1>
            <Link href={"/"}>&empty; = &part;m&part;n.</Link>
          </h1>
        </div>
        <div className="sm:flex gap-10 hidden">
          <div>
            <ul className="gap-5 list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="text-ghostWhite font-semibold cursor-pointer"
                >
                  <Link href={`${nav.id}`}>
                    <span className="text-primary mr-[5px] ">&empty;</span>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-primary border-[1px] px-3">Dark</div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-deepNavyBlue absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end flex-1 flex-col gap-2"> 
            {/* items-center */}
              {navLinks.map((nav) => (
                <li key={nav.id} className="text-ghostWhite font-semibold">
                  <Link href={`${nav.id}`}>
                    <span className="text-primary mr-[5px] ">&empty;</span>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="fixed sm:flex flex-col items-center justify-center left-[30px] gap-[8px] top-[0px] hidden overflow-hidden">
        <span className="w-[1px] h-[33vh] block bg-white"></span>
        <div className="flex flex-col text-primary font-semibold gap-4">
          <a
            href={socialLinks.linkedIn}
            target="_blank"
            className="cursor-pointer"
          >
            <LinkedInIcon />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            className="cursor-pointer"
          >
            <XIcon />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            className="cursor-pointer"
          >
            <GitHubIcon />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            className="cursor-pointer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
