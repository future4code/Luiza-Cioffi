import { Request, Response } from "express";
import { UserDatabase } from "../Data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export async function login(req: Request, res:Response): Promise<any>{
    try{
        const {email, password}= req.body

        if(!email || !password){
            res.status(422).send(
                'Atenção: verifique as informações fornecidas e tente novamente'
            );
        }
    
    const userDatabase =  new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if (!user) {
        res.status(409).send('Usuário não encontrado')
    }

    const hashManager = new HashManager();
    const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

    if (!passwordIsCorrect){
        res.status(401).send("E-mail e/ou senha incorretos")
    }
    const authenticator = new Authenticator();  
    const token = authenticator.generate({ id: user.getId(), role: user.getRole()})

    res.status(200).send({message: "Usuário logado com sucesso!", token})

    }catch(error){
        res.status(400).send(error.message)
    }
}