import { Request, Response } from "express"
import { ProductBusiness } from "../Business/ProductBusiness";
import { createProductInputDTO, getProductByIdDTO, getProductByNameDTO, getProductByTagDTO, product } from "../Entities/Products";

export class ProductController {

    createProduct = async (req: Request, res: Response) => {
        try {
            let message = 'Sucesso!'

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

            let message = 'Sucesso!'

            const {id} = req.params
            const input:getProductByIdDTO = {
                id: req.params.id
            }

            const product:product = await new ProductBusiness().getProductById(input)

            res.status(200).send({message, product})
        }catch (error:any){
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({message})
        }
    };

    getProductByName = async (req: Request, res: Response) => {
        try {

            let message = 'Sucesso!'

            const {name} = req.params
            const input:getProductByNameDTO = {
                name: req.params.name
            }

            const product:product = await new ProductBusiness().getProductByName(input)

            res.status(200).send({message, product})
        }catch (error:any){
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({message})
        }
    };

    getProductByTag = async (req: Request, res: Response) => {
        try {

            let message = 'Sucesso!'

            const {tag} = req.params
            const input:getProductByTagDTO = {
                tag: req.params.tag
            }

            const product:product = await new ProductBusiness().getProductByTag(input)

            res.status(200).send({message, product})
        }catch (error:any){
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({message})
        }
    }
}