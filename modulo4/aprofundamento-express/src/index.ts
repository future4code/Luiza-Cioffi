import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use (cors())

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});;

//1
app.get("/ping", (req, res) => {          
    res.send("Pong")
})

//2
type ToDos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//3
const toDo: ToDos[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 2,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 2,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 3,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
]

//4
app.get("/todo/accomplished", (req, res) => {
    const filterToDo = toDo.filter((todo) => {
      if(todo.completed === true){
        return todo
      }
    })
    res.send(filterToDo)
})

//5
app.post("/todo/create", (req, res) => {
    const userId = req.body.userId
    const id = req.body.id
    const title = req.body.title
    const completed = req.body.completed
  
    toDo.push({userId, id, title, completed})
    res.send({ result: toDo })  
})

//6
app.post("/todo/edit", (req, res) => {
    const taskId = Number(req.query.id)
    const saveInfo = []
  
    const filterTask = toDo.filter((task) =>{
      if(task.id === taskId){
        task.completed = !task.completed
        return saveInfo.push(task)
      }
    })
    res.send(filterTask)
})

//7
