import app from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()


app.post ("/signup", userController.signUp)
app.post ("/login", userController.login)
app.get ("/all", userController.getUsers)
app.delete("/:id", userController.deleteUser) 

// import { app } from "./app"
// import { signup } from './endpoints/signup'
// import { createTask } from './endpoints/createTask'
// import { getTaskById } from './endpoints/getTaskById'
// import { login } from './endpoints/login'

// app.post('/user/signup', signup)
// app.post('/user/login', login)

// app.put('/task', createTask)
// app.get('/task/:id', getTaskById)

