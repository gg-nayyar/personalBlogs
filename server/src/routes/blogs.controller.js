const blogModel = require("../models/blogs.mongo.js");

async function httpGetAllBlogs(req,res){ 
    return res.json(await blogModel.find({}));
}
async function findById(req,res){
    const id = req.params.id;
    const results = await blogModel.find({_id: id});
    return res.json(results);
}
module.exports = {httpGetAllBlogs,findById};