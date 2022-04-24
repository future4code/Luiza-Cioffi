import { Express } from 'express';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { productRouter } from './Routes/productRouter';

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())
app.use("/product", productRouter)


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003 [Servidor rodando na porta 3003]");
});

export default app 