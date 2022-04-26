import express from "express";
import { ProductController } from "../Controller/ProductController";


export const productRouter = express.Router();
const productController = new ProductController

productRouter.post("/new", productController.createProduct);
productRouter.get("/id/:id", productController.getProductById);
productRouter.get("/name/:name", productController.getProductByName);
productRouter.get("/tag/:tag", productController.getProductByTag);