import { BaseDatabase } from "../Data/BaseDatabase";
import {productsTableName} from '../Entities/Products';

class Migrations extends BaseDatabase {
    public migrationsData = () => {
        this.connection.raw(
            `CREATE TABLE IF NOT EXISTS ${productsTableName} (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            tag VARCHAR(20) NOT NULL
            );`
        ).then(
            () => console.log("Tabela MySql criada com sucesso")
        ).catch((error: { message: any; }) => console.log(error.message)
        ).finally(
            ()=>{this.connection.destroy()}
        )     
    }
}

const createTable = new Migrations()
createTable.migrationsData()
