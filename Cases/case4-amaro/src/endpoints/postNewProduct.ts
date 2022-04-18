import { Request, Response } from "express";
import connection from "../connection";
import generateId from "../services/idGenerator";
import {productsTableName} from '../types'

export default async function postNewProduct(
    req: Request,
    res: Response
): Promise<void> {
    try { 
        const { name, tags} = req.body
        const id: string = generateId()

        await connection(productsTableName)
            .insert({id, name, tags})
        res.status(200)

    }catch(error: any) {
        console.log(error.message);
        res.status(500).send("Internal server error")
    }
}