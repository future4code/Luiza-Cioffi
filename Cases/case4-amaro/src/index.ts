import app from "./app";
import getProductsById from "./endpoints/getProductsById";
import getProductsByName from "./endpoints/getProductsByName";
import getProductsByTag from "./endpoints/getProductsByTag";
import postNewProduct from "./endpoints/postNewProduct";

app.post("/products/new", postNewProduct)
app.get("/products/name/:name", getProductsByName)
app.get("/products/id/:id", getProductsById)
app.get("/products/tag/:tag", getProductsByTag)