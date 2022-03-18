import express from "express";
import cors from "cors";
import knex from "knex";
import dotenv from 'dotenv';
import createUser from './endpoints/createUser'
import getUserbyID from "./endpoints/getUserbyID";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskByID from "./endpoints/getTaskByID";

dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 3306
    }
})

const app = express();
app.use(express.json());
app.use (cors())

app.get('/user/:id', getUserbyID)
app.put('/user', createUser)
app.post(`/user/edit/:id`, editUser)
app.get(`/task/:id`, getTaskByID)
app.put(`/task`, createTask)

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});