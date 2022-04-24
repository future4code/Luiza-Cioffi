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
    }
}