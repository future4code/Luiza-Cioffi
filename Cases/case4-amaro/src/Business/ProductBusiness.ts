import connection from "../connection";
import { createProductInputDTO, getProductByIdDTO, productsTableName } from "../Entities/Products";
import { IdGenerator } from '../services/idGenerator';
import { product } from '../Entities/Products'
import { ProductDatabase } from "../Data/ProductDatabase";

//const { name, tag } = req.body;

export class ProductBusiness {

    async createProduct(input: createProductInputDTO) {
        
        try {
            const idGenerator = new IdGenerator
            const id: string = idGenerator.generateId()

            const product: product = {
                id,
                name: input.name,
                tag: input.tag,
            }

            await new ProductDatabase().createProduct(product)
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    };

    async getProductById(input: getProductByIdDTO) {
        try {

        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}