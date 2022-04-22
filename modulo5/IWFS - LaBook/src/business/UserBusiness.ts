import { SignupInputDTO, user } from "../entities/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase"
import { TokenManager } from "../services/TokenManager";

export class UserBusiness {
    async signup(input: SignupInputDTO): Promise<string>{
        try {
            if (!input.name || !input.email || !input.password) {
    //            res.statusCode = 406
                throw new Error('"name", "email" and "password" must be provided')
            }
            
            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()

            const hashManager = new HashManager()   
            const cypherPassword = await hashManager.hash(input.password);

            const user: user = {
                id,
                name: input.name,
                email: input.email,
                password: cypherPassword
            }

            const userDatabase = new UserDatabase();
            await userDatabase.insertUser(user)
        
            const tokenManager = new TokenManager()
            const token: string = tokenManager.generateToken({ id })

            return token
            
        }catch(error: any){
            throw new Error(error.message);
        }
    }
}