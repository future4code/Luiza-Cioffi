import express from "express";
import { ProductController } from "../Controller/ProductController";


export const productRouter = express.Router();
const productController = new ProductController

productRouter.post("/products/new", productController.createProduct);
productRouter.get("/products/:id", productController.getProductById);
productRouter.get("/products/:name")
productRouter.get("/products/:tag")