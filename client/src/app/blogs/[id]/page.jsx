"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function page({ params }) {
  const [blogData, setBlogData] = useState(null);
  async function getBlog() {
    const blogs = await axios.get(
      "http://localhost:8000/api/blogs/" + params.id
    );
    setBlogData(blogs.data[0]);
    // console.log(blogs.data[0])
  }
  useEffect(() => {
    (async () => {
      await getBlog();
    })();
  }, []);
  {
    if (blogData != null) {
      return (
        <div>
          <div className="mt-5 flex">
            <div>
              <div className="flex">
                <h1 className="pb-4 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
                  {blogData.title}
                </h1>
                <div className="h-10 w-10"></div>
              </div>
              <p className="mt-20 flex justify-center content-center text-sky-200">
                {blogData.description}
              </p>
            </div>
            <Image
              className="ml-auto mr-4 h-80 w-60 rounded-xl"
              src="/hacker1.webp"
              height={50}
              width={50}
              alt="Picture of a hacker"
              unoptimized
            />
          </div>
          {Object.values(blogData.heading).map((data, ind) => {
            return (
              <div className="mt-8">
                <h1 className=" mb-4 text-2xl font-extrabold leading-none tracking-tight text-fuchsia-400 md:text-3xl lg:text-4xl dark:text-fuchsia-400">
                  {data}
                </h1>
                {Object.values(blogData.paragraph).map((data, i) => {
                  if (ind === i) {
                    return <p className="mt-4 text-sky-200">{data}</p>;
                  }
                })}
              </div>
            );
          })}
          <h1 className="justify-center mt-6 mb-4 text-xl font-extrabold leading-none tracking-tight text-fuchsia-400 md:text-1xl lg:text-2xl dark:text-fuchsia-400">
            Thankyou!
          </h1>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
