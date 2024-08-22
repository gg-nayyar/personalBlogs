"use client";
import axios from "axios";
import Card from "@/components/header/card";
import { useState, useEffect } from "react";
import Link from "next/link";

const blogs = () => {
  const [data, setData] = useState([]);
  async function getAllBlogs() {
    const blogs = await axios.get("http://localhost:8000/api/blogs");
    setData(blogs.data);
    console.log(blogs.data)
  }
  useEffect(() => {
    getAllBlogs();
  },[]);
  return (
    <div>
      {data.map((data) => {
        return <Link href={`/blogs/${encodeURIComponent(data._id)}`}><Card title={data.title} description={data.description} img_src ={data.img_src} /></Link>;
      })}
    </div>
  );
};

export default blogs;
