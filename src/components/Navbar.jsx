"use client";
import React, { useState } from "react";
import Logo from "@/../public/logo.svg";
import Icons from "@/../public/icons.png";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Search from "@/../../public/search.svg";
const links = [
  {
    id: 1,
    text: "خانه",
    url: "/",
  },
  {
    id: 2,
    text: " بلاگ",
    url: "/",
  },
  {
    id: 3,
    text: "داستان ما",
    url: "/",
  },
  {
    id: 4,
    text: " تماس با ما",
    url: "/",
  },
];

const hamburgerMenu = {
  closed: {
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  opened: {
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const hamburgerIcon1 = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  opened: {
    rotate: 25,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const hamburgerIcon2 = {
  closed: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  opened: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const hamburgerIcon3 = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  opened: {
    rotate: -25,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleClose = () => {
    setNav(false);
  };
  return (
    <div className="flex justify-between items-center border-b border-[#F5F5F5]">
      <div className="flex items-center gap-2">
        <button
          className=" flex z-50 lg:hidden flex-col gap-1"
          onClick={handleNav}
        >
          <motion.div
            variants={hamburgerIcon1}
            animate={nav ? "opened" : "closed"}
            className=" w-10 h-1 bg-[#878787] origin-left"
          ></motion.div>
          <motion.div
            variants={hamburgerIcon2}
            animate={nav ? "opened" : "closed"}
            className=" w-10 h-1 bg-[#878787]"
          ></motion.div>
          <motion.div
            variants={hamburgerIcon3}
            animate={nav ? "opened" : "closed"}
            className=" w-10 h-1 bg-[#878787] origin-left"
          ></motion.div>
        </button>
        <Image className="block lg:hidden" src={Search} alt="Search" />
      </div>
      <div className="lg:w-1/3 flex justify-start">
        <Image src={Logo} alt="Logo" className=" w-[105.76px] h-[50px]" />
      </div>

      <div className="w-1/3 hidden lg:flex flex-row gap-16 justify-center">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="hover:text-[#80AD01] transition duration-300 text-[#6B6B6B]"
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className=" w-1/3 hidden lg:flex justify-end">
        <Image src={Icons} alt="icons" />
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={hamburgerMenu}
            initial="closed"
            animate="opened"
            exit="exit"
            className=" fixed top-0 left-0 flex flex-col gap-8 p-8  text-2xl justify-center items-start h-auto w-full text-foreground bg-background z-40"
          >
            {links.map((link) => (
              <Link key={link.id} href={link.url} onClick={handleClose}>
                {link.text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
