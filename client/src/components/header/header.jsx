"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const header = () => {
  return (
    <div className="mt-1 w-auto h-20 flex items-center content-evenly text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
      <a href="/" className="mt-3 mb-4 text-4xl font-extrabold leading-none tracking-tight ml-4 ">
        BLOGS
      </a>
      <Image className="self-center justify-self-center ml-auto" 
        src="/nyan.gif"
        width={80}
        height= {80} 
        alt="Nyan Cat"
        unoptimized
        />
      <div className="ml-auto flex justify-between place-content-evenly">
        <Link href="/about" className="mr-5">
          About Us
        </Link>
        <Link href="/blogs" className="mr-5">
          Blogs
        </Link>
        <Link href="/contact" className="mr-5">
          Contact Us
        </Link>
        <Link href="/help" className="mr-5">
          Help
        </Link>
      </div>
    </div>
  );
};
export default header;
