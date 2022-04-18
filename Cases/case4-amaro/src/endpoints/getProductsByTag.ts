import { Request, Response } from "express";

export default async function getProductsByTag(
    req: Request,
    res: Response
): Promise<void> {
    try { 

    }catch(error: any) {
        console.log(error.message);
        res.status(500).send("Internal server error")
    }
}