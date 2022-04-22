import { user } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    async insertUser(user: user){
        try {
            
            await connection('labook_users')
            .insert({
            id,
            name,
            email,
            password: cypherPassword
            })
        } catch(error: any) {
            throw new Error(error.sqlMessage)
        }
    }
}