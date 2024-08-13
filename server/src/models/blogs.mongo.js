const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    img_src:{
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    heading: {
        type: Object,
        required:true,
    },
    paragraph: {
        type: Object,
        required:true,
    }
})
module.exports = mongoose.model('Blog',blogsSchema);