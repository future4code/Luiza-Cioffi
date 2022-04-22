import express from "express";

export const productRouter = express.Router();
productRouter.post("/products/new")
productRouter.get("/products/:id")
productRouter.get("/products/:name")
productRouter.get("/products/:tag")