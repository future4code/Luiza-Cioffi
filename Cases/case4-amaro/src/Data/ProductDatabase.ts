import { BaseDatabase } from "./BaseDatabase";
import { product, productsTableName } from "../Entities/Products";

export class ProductDatabase extends BaseDatabase {
    async createProduct(product: product){
        try {

            await this.connection(`${productsTableName}`)
            .insert({
                id: product.id,
                name: product.name,
                tag: product.tag
            })
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    async getProductById(id: string): Promise <product>{
        try {

            const result:any = await this.connection(`${productsTableName}`)
                .select('*')
                .where({ id })

            return result;
            
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductByName(name: string): Promise <product>{
        try {

            const result:any = await this.connection(`${productsTableName}`)
                .select('*')
                .where({ name })

            return result;
            
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductByTag(tag: string): Promise <product>{
        try {

            const result:any = await this.connection(`${productsTableName}`)
                .select('*')
                .where({ tag })

            return result;
            
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}