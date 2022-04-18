import connection from "../connection";
import {productsTableName, tagsTableName, productsTagsRelations} from '../types'

connection.raw(
    `CREATE TABLE IF NOT EXISTS ${productsTableName} (
    id_product INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS ${tagsTableName} (
        name_tag VARCHAR(15) PRIMARY KEY
    );
    
    CREATE TABLE IF NOT EXISTS ${productsTagsRelations} (
        id_product INT,
        name_tag VARCHAR(15),
        FOREIGN KEY (id_product) REFERENCES ${productsTableName}(id_product),
        FOREIGN KEY (name_tag) REFERENCES ${tagsTableName}(name_tag)
    );`
).then(
    () => console.log("MySql tables where successfully created")
).catch(error => console.log(error.message)
).finally(
    ()=>{connection.destroy()}
)

