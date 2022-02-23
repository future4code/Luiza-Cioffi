import { Request, Response } from "express";

export async function signup(req: Request, res:Response): Promise<any>{
    try{
        const {id, name, email, password, role}= req.body

        if(!name || !email || !password || !role){
            res.status(422).send(
                'Atenção: verifique as informações fornecidas e tente novamente'
            );
        }

    }catch(error){
        res.status(400).send(error.message)
    }
}