import { DataBase } from "../data/DataBase"
import { User } from "../entities/User"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import { IdGenerator } from "../services/idGenerator"

export const singUpBusiness = async (input: any) => {

    try {

        const {name, email, passowrd, role} = input 

        if (!name || !email ||!passowrd ||!role) {
            throw new Error ("Verifique os dados 'name', 'email', 'password' e 'role', depois tente novamente.")
        } 

        if (email.indexOf ("@") === -1){
            throw new Error ("Email inválido.")
        }

        if (passowrd.length < 6) {
            throw new Error ("A senha deve ter mais 6 caracteres ou mais")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(passowrd)

        const newUser = new User (id, name, email, hashPassword, role)

        const dataBase = new DataBase()
        const createUser = dataBase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id, role})

        return token


    } catch (error: any) {
        throw new Error ( error.message || "Error creating user. Please check your system administrator.")

    }


} 