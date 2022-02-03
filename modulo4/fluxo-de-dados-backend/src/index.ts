import express from "express";
import { Request, Response} from "express";
import cors from "cors";
import { objects, Objects } from "./data"
import { send } from "process";

const app = express();

app.use(express.json());
app.use (cors())

app.listen(3003, () => {
    console.log(`Servidor rodando em http://localhost:3003`);
});

//1
app.get('/test', (req, res) => {
    res.send("A API está funcionando na porta 3003").status(200)
})

//3 e 7
// app.post("/products", (req, res) => {
//     const id = req.body.id
//     const name = req.body.name
//     const price = req.body.price

//     objects.push({ id, name, price})
//     res.send({ result: objects }).status(200)  
// })

app.post("/products", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body
        
        if (!name || !price) {
            throw new Error("Atenção: verifique os campos obrigatórios 'price' e 'name'")
        }

        if (typeof name !== "string") {
            throw new Error("Atenção: o campo name deve ser do tipo 'string'")
        }

        if (typeof price !== "number") {
            throw new Error("Atenção: o campo 'price' deve ser do tipo 'number'")
        }

        if (price <= 0) {
            throw new Error("Atenção: o campo 'price' deve ser maior que zero")
        }

        const newProduct: Objects = {
            id: Date.now().toString(),
            name,
            price
        }
        objects.push(newProduct)
        res.status(200).send(objects)
    }

    catch (error: any) {
        switch (error.message) {
            case "Atenção: verifique os campos obrigatórios 'price' e 'name'":
                res.status(428)
                break
            case "Atenção: o campo name deve ser do tipo 'string'":
                res.status(428)
                break
            case "Atenção: o campo 'price' deve ser do tipo 'number'":
                res.status(428)
                break
            case "Atenção: o campo 'price' deve ser maior que zero":
                res.status(428)
                break
            default:
                res.status(404).send("Ocorreu um erro inesperado")
        }
        res.send(error.message)
    }
})


//4
app.get('/products', (req: Request, res: Response) => {
    res.send({result: objects}).status(200)
})

//5 e 8
app.put("/products/:id/price", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const newPrice = req.body.price

        if (!newPrice) {
            throw new Error("Atenção: campo 'price' não preenchido")
        }

        if (typeof newPrice !== "number") {
            throw new Error("Atenção: o campo 'price' é do tipo 'number'")
        }

        if (newPrice <= 0) {
            throw new Error("Atenção: o campo 'price' deve ser maior que zero")
        }

        if (!id) {
            throw new Error("Atenção: o campo 'id' deve ser preenchido")
        }

        let isObjectFound = false
        for (let object of objects) {
            if (object.id === id) {
                object.price = newPrice
                isObjectFound = true
            }
        }
        if (!isObjectFound) {
            throw new Error("Produto não encontrado")
        }

        res.status(200).send(objects)
    }

    catch (error: any) {
        switch (error.message) {
            case "Atenção: campo 'price' não preenchido":
                res.status(428)
                break
            case "Atenção: o campo 'price' é do tipo 'number'":
                res.status(428)
                break
            case "Atenção: o campo 'price' deve ser maior que zero":
                res.status(428)
                break
            case "Atenção: o campo 'id' deve ser preenchido":
                res.status(428)
                break
            case "Produto não encontrado":
                res.status(404)
                break
            default:
                res.status(404).send("Ocorreu um erro inesperado")
        }
        res.send(error.message)
    }
})

//6 e 9
app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (!id) {
            throw new Error("Atenção: o campo 'id' deve ser preenchido")
        }

        let isObjectFound = false
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].id === id) {
                objects.splice(i, 1)
                isObjectFound = true
            }
        }

        if (!isObjectFound) {
            throw new Error("Produto não encontrado")
        }
        res.status(200).send(objects)
        
    }
    catch (error: any) {
        switch (error.message) {
            case "Atenção: o campo 'id' deve ser preenchido":
                res.status(428)
                break
            case "Produto não encontrado":
                res.status(404)
                break
            default:
                res.status(404).send("Ocorreu um erro inesperado")
        }
        res.send(error.message)
    }
})