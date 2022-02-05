import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json()); //middleware para comunicação em json 
app.use(cors()) //middleware para utilização da lib cors

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//1
app.get("/", (req, res) => {        
    console.log("Deu tudo certo com o teste")  
    res.send(`Tudo ok!`).status(200)
})

//2
type User = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

//3
const users:User[] = [
    {
        id: "1a",
        name: "Maria",
        phone: 119997,
        email: "maria@email.com",
        website: "mariapazeamor.com.br"
    },
    {
        id: "2b",
        name: "Mariana",
        phone: 129997,
        email: "mariana@email.com",
        website: "marianacongelados.com.br"
    },
    {
        id: "3c",
        name: "Matusquela",
        phone: 139997,
        email: "matuskela@email.com",
        website: "matuskelavidaloka.com.br"
    }

]

//4
app.get('/users', (req, res) => {
    res.send(users).status(200)
})

//5
type Posts = {
    id: number,
    title: string,
    body: string,
    userId: string,
}

//6
const posts:Posts[] = [
    {
        id: 1,
        title: "Zerinhooo",
        body: "Primeiro a chegar, Matuskela zerinho",
        userId: "3c"
    },
    {
        id: 2,
        title: "Como mexe",
        body: "como mexe aqui? Não entendi nada",
        userId: "1a"
    },
    {
        id: 3,
        title: "É fácil!",
        body: "Mãe, quando chegar em casa te mostro",
        userId: "3c"
    },
    {
        id: 4,
        title: "Os melhores congelados!",
        body: "Oi genteeeee! Vim contar para voc~es da nossa linha Mariana Congelados! os melhores congelados do estado!",
        userId: "2b"
    },
    {
        id: 5,
        title: "Propagandas?",
        body: "Vamos ficar recebendo propagandas até aqui? Nãããooo!",
        userId: "3c"
    },
]

//7
app.get('/posts', (req, res) => {
    res.send(posts).status(200)
})

//8
app.get('/posts/:userId', (req, res) => {
    const id = req.params.userId

    const userPosts = posts.filter((post) => {
        if(post.userId === id) {
            return post
        }
    })
    res.send(userPosts).status(200)
})