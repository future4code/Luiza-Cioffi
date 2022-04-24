import { Request, Response } from "express"
import { ProductBusiness } from "../Business/ProductBusiness";
import { createProductInputDTO } from "../Entities/Products";

export class ProductController {

    CreateProduct = async (req: Request, res: Response) => {
        try {
            let message = 'Success!'

            const input:createProductInputDTO = {
                name: req.body.name,
                tag: req.body.tag
            }

            await new ProductBusiness().createProduct(input)
            res.status(201).send({message})
        
        } catch (error:any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({message})
        }
    }
}