"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Button = ({btnTxt, linkTo}) => {
  return (
    <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className="px-6 py-2 border-[1px] border-primary text-ghostWhite hover:bg-purple-600">
      <Link href={linkTo}>{btnTxt}</Link>
    </motion.button>
  );
};

export default Button;
