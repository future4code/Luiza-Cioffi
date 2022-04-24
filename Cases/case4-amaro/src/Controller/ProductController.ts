import { Request, Response } from "express"
import { ProductBusiness } from "../Business/ProductBusiness";
import { createProductInputDTO, getProductByIdDTO } from "../Entities/Products";

export class ProductController {

    createProduct = async (req: Request, res: Response) => {
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
    };

    getProductById = async (req: Request, res: Response) => {
        try {

            let message = 'Success!'

            const {id} = req.params
            const input:getProductByIdDTO = {
                id: req.params.id
            }
        }catch (error:any){
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({message})
        }
        }
    }
}