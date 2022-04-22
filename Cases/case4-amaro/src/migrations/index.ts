import connection from "../connection";
import {productsTableName} from '../types'

connection.raw(
    `CREATE TABLE IF NOT EXISTS ${productsTableName} (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    tag VARCHAR(20) NOT NULL
    );`
).then(
    () => console.log("MySql tables where successfully created")
).catch(error => console.log(error.message)
).finally(
    ()=>{connection.destroy()}
)

