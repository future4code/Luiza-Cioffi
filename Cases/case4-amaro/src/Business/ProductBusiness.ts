import { createProductInputDTO, getProductByIdDTO, getProductByNameDTO, getProductByTagDTO, productsTableName } from "../Entities/Products";
import { IdGenerator } from '../services/idGenerator';
import { product } from '../Entities/Products'
import { ProductDatabase } from "../Data/ProductDatabase";

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
            
            const product:product = await new ProductDatabase().getProductById(input.id)

            if (!product){
                throw new Error("Produto não encontrado")
            }

            return product;
            
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    };

    async getProductByName(input: getProductByNameDTO) {
        try {   
            
            const product:product = await new ProductDatabase().getProductByName(input.name)

            if (!product){
                throw new Error("Produto não encontrado")
            }

            return product;
            
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductByTag(input: getProductByTagDTO) {
        try {   
            
            const product:product = await new ProductDatabase().getProductByTag(input.tag)

            if (!product){
                throw new Error("Produto não encontrado")
            }

            return product;
            
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}