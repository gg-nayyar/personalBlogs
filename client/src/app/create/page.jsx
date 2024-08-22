"use client";
import axios from "axios";

import React, { useEffect } from "react";
import { useState, useRef } from "react";

const create = () => {
  const [counter, setCounter] = useState(1);
  function handleClick(event) {
    event.preventDefault();
    setCounter(counter + 1);
  }
  const [heading, setHeading] = useState({});
  const [paragraph, setParagraph] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [src, setSrc] = useState("");

  useEffect(() => {}, [title, description, src, heading, paragraph]);
  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      Title: title,
      Description: description,
      Img_src: src,
      Heading: heading,
      Paragraph: paragraph,
    };
    axios
      .post("http://localhost:8000/api/create", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <form className="flex flex-col">
        <label className="mt-5" htmlFor="title">
          Title
        </label>
        <input
          className="mt-1 mb-5 bg-transparent text-sky-200 border-2 rounded-lg border-sky-200 "
          type="text"
          id="title"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="description">Description</label>
        <input
          className="mt-1 mb-5 bg-transparent text-sky-200 border-2 rounded-lg border-sky-200 "
          type="text"
          id="description"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="img-src">Image_Source</label>
        <input
          className="mt-1 mb-5 bg-transparent text-sky-200 border-2 rounded-lg border-sky-200 "
          type="text"
          id="img-src"
          name="img-src"
          onChange={(e) => {
            setSrc(e.target.value);
          }}
        />
        {Array.from(Array(counter)).map((c, index) => {
          const headingId = `heading-${index}`;
          const paraId = `para-${index}`;
          return (
            <div className="flex flex-col">
              <label htmlFor="heading">Heading#{index + 1} </label>
              <input
                className="mt-1 mb-5 bg-transparent text-sky-200 border-2 rounded-lg border-sky-200 "
                type="text"
                value={heading[index]}
                onChange={(e) => {
                  setHeading({ ...heading, [index]: e.target.value });
                }}
                data-index={index}
                id={headingId}
                name={headingId}
              />
              <label htmlFor="paragraph">Paragraph#{index + 1}</label>
              <input
                className="mt-1 mb-5 bg-transparent text-sky-200 border-2 rounded-lg border-sky-200 "
                type="text"
                value={paragraph[index]}
                onChange={(e) => {
                  setParagraph({ ...paragraph, [index]: e.target.value });
                }}
                data-index={index}
                id={paraId}
                name={paraId}
              />
            </div>
          );
        })}
        <button onClick={handleClick}>Add Heading and Paragraph</button>

        <button onClick={handleSubmit}>Create Blog</button>
      </form>
    </div>
  );
};
export default create;
