import { Request, Response } from "express";

export default async function createTask(req: Request, res: Response){
    try{
        //validar entradas de requisições
        // consultar banco de dados
        // validar saídas do banco
        // responder a requisição

    }catch(error){
        res.status(400).send(error)
    }
}

// {message: error.message || error.sqlMessage}