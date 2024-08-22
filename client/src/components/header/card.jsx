"use client";
import React from "react";

export default function card(props) {
  return (
      <div className="flex content-between">
        {/* <section className="grid min-h-screen p-8 place-items-center"> */}
          <div className="container grid grid-cols-1 gap-8 my-10 lg:grid-cols-2 w-auto">
            <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
                <img
                  src="https://bucket.material-tailwind.com/magic-ai/06b38f84f9669f766048c469ce861b81880378273a11ae9badaedfc32868ef44.jpg"
                  alt="Revolutionizing Our Production Process"
                  className="object-cover w-full h-full cursor-pointer"
                />
              </div>
              <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                <a
                  href="#"
                  className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                >
                 {props.title}
                </a>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                  {props.description}
                </p>
                <div className="flex items-center object-cover gap-4">
                  <img
                    src="https://cdn.dribbble.com/users/1346218/screenshots/7052546/media/7e914a81876bbca9b80cc07004f510e5.png"
                    className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg"
                  />
                  <div>
                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
                      Krish Nayyar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </section> */}
      </div>
      );
}
