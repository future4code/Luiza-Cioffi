import * as jwt from 'jsonwebtoken'
import {USER_ROLES } from '../entities/User'

export interface AuthenticationData {
    id: string
    role: USER_ROLES
}

export class Authenticator {
   public generate (input: AuthenticationData) : string {
       const token = jwt.sign (input, process.env.JWT_KEY as string, {
           expiresIn: "10h"
       })
       return token 
   }

   public getTokenData (token: string) : AuthenticationData {
       const data = jwt.verify (token, process.env.JWT_KEY as string)
       return data as AuthenticationData
   }
} 

// import * as jwt from "jsonwebtoken"
// import { authenticationData } from "../types/user"

// export const generateToken = (
//    payload: authenticationData
// ): string => {
//    return jwt.sign(
//       payload,
//       process.env.JWT_KEY as string,
//       {
//          expiresIn: "24min"
//       }
//    )
// }

// export const getTokenData = (
//    token: string
// ): authenticationData => {
//    return jwt.verify(
//       token,
//       process.env.JWT_KEY as string
//    ) as authenticationData
// }