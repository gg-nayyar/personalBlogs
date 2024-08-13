// const { handleSubmit } = require( "../../../client/src/app/create/page.jsx");
const axios = require ('axios');
const blogsSchema = require('./blogs.mongo.js')

const blog = {
  id: "Krish Nayyar", //can be anything like author name has to be unique
  title: "Welcome to Our personal Blog",
  img_src:
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcoffee%2F&psig=AOvVaw1VIfX5r9OiE9ngcv1C17HV&ust=1719143417560000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCiz7mS74YDFQAAAAAdAAAAABAE",
  description:
  "If you can't explain it simply, you don't understand it well enough. – Albert Einstein",
  heading: "Let's Start", //We want to make this as much as user wants
  paragraph: "lorem ipsum",
};
async function getAllBlogs() {
  const blogs = await blogsSchema.find();
  return blogs;
}
module.exports =  getAllBlogs; 
