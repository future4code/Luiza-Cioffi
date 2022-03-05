import { Request, Response } from "express";
import insertUser from '../data/insertUser'

export default async function createUser(req: Request, res: Response){
    try{
        //validar entradas de requisições
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ){
            res
                .status(400)
                .send("Ops, algo deu errado! Preencha os campos 'name', 'nickname' e 'e-mail' e tente novamente")
            
            return
        }

        const id:string = Date.now() + Math.random().toString()
        // consultar banco de dados
        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        
        res
            .status(200)
            .send("Usuário criado com sucesso!")
        // responder a requisição

    }catch(error){
        res.status(400).send(error)
    }
}

// {message: error.message || error.sqlMessage}