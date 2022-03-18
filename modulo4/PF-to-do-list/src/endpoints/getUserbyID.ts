import { Request, Response } from "express";
import selectUserByID from "../data/selectUserByID";

export default async function getUserbyID(req: Request, res: Response){
    try{
        const user = await selectUserByID(req.params.id)
        if(!user){
            res.status(404).send({message: "Usuário não encontrado"})
        } 

        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        })

    }catch(error){
        res.status(400).send({error})
    }
}

// {message: error.message || error.sqlMessage}