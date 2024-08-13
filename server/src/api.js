const express = require( 'express');

const blogsRouter = require( './routes/blogs.router.js');

const api = express.Router();

api.use('/api',blogsRouter);

module.exports = api;