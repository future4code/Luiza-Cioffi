import { Request, Response } from "express";
import { SignupInputDTO } from "../entities/User";

export class UserController {

    async signup(req: Request, res:Response) {
        try {
            let message = "Success!"
            const { name, email, password } = req.body
            const input: SignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
      
          
      
            res.status(201).send({ message, token })
      
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
      
            res.send({ message })
        }
    }
}