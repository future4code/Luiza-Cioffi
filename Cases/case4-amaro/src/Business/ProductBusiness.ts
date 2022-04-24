import connection from "../connection";
import { createProductInputDTO, productsTableName } from "../Entities/Products";
import generateId from '../services/idGenerator'

//const { name, tag } = req.body;

export class ProductBusiness {

    async createProduct(input: createProductInputDTO) {
        const idGenerator = new generateId
        const id: string = idGenerator.generateId()
    }
}