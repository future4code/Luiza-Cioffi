import { Request, Response } from "express";
import { UserDatabase } from "../Data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export async function signup(req: Request, res:Response): Promise<any>{
    try{
        const {name, email, password, role}= req.body

        if(!name || !email || !password || !role){
            res.status(422).send(
                'Atenção: verifique as informações fornecidas e tente novamente'
            );
        }
    
    const userDatabase =  new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if (user) {
        res.status(409).send('E-mail já cadastrado!')
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const newUser = new User(id, name, email, hashPassword, role);
    await userDatabase.createUser(newUser);

    const authenticator = new Authenticator();  
    const token = authenticator.generate({ id, role})

    res.status(200).send("Usuário criado com sucesso!")

    }catch(error){
        res.status(400).send(error.message)
    }
}