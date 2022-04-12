import app from "./app";
import connection from './connection'
import generateId from "./services/idGenerator"

app.get("/")

connection.raw("SHOW TABLES").then(console.log)
console.log(generateId());