import express from "express";
import postNewProduct from "../endpoints/postNewProduct";

export const productRouter = express.Router();
productRouter.post("/products/new", postNewProduct)
productRouter.get("/products/:id")
productRouter.get("/products/:name")
productRouter.get("/products/:tag")