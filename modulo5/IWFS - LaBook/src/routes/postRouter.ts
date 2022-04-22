import express from "express";

export const postRouter = express.Router();

postRouter.post('/posts/:id');
postRouter.post('/posts/create');