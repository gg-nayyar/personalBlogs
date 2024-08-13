const express = require("express");
const blogsSchema = require("../models/blogs.mongo.js");
const {httpGetAllBlogs, findById } = require( "./blogs.controller.js");

const blogsRouter = express.Router();

blogsRouter.get('/blogs', httpGetAllBlogs);
blogsRouter.get('/blogs/:id',findById)
blogsRouter.post('/create',async (req,res)=>{
    const blog = new blogsSchema({
        title: req.body.Title,
        img_src: req.body.Img_src,
        description: req.body.Description,
        heading: req.body.Heading,
        paragraph: req.body.Paragraph,
    })
    await blog.save()
}
)

module.exports = blogsRouter;