import * as bycriptjs from 'bcryptjs'

export class HashManager {

    public async hash (text: string) : Promise <string> {
        const rounds = 12 
        const salt = await bycriptjs.genSalt(rounds)
        return bycriptjs.hash (text, salt)
    }

    public async compare (text: string, hash: string) : Promise <boolean> {
        return bycriptjs.compare(text,hash)
    }
}

// import * as bcrypt from 'bcryptjs';

// export const hash = async (plainText: string): Promise<string> => {
//   const rounds = Number(process.env.BCRYPT_COST);
//   const salt = await bcrypt.genSalt(rounds);
//   return bcrypt.hash(plainText, salt)
// }

// export const compare = async (plainText: string, cypherText: string): Promise<boolean> => {
//   return bcrypt.compare(plainText, cypherText)
// }