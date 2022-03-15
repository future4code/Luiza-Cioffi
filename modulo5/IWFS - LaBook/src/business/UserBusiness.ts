import { SignupInputDTO } from "../entities/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    async signup(input: SignupInputDTO){

        if (!input.name || !input.email || !input.password) {
//            res.statusCode = 406
            throw new Error('"name", "email" and "password" must be provided')
        }
        
        const idGenerator = new IdGenerator()
        const id: string = idGenerator.generateId()

        const hashManager = new HashManager()   
        const cypherPassword = await hashManager.hash(input.password);
      
        const token: string = generateToken({ id })
    }
}