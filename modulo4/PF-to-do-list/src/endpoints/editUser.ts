import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response){
    try{
        if (
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === ''
        ){
            res.status(400).send("Nenhum dos campos pode estar em branco")
        } if (
            !req.body.name &&
            !req.body.nickname &&
            !req.body.email
        ){
            res.status(400).send({message:"Pelo menos um campo deve ser selecionado para alteração de usuário"})
        }

        await updateUser(
            req.body.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send({message: "Usuário atualizado com sucesso"})

    }catch(error){
        res.status(400).send(error)
    }
}

// {message: error.message || error.sqlMessage}