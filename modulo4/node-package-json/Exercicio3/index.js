// 3.
 const tarefa = process.argv[2]

const ListaDeTarefas = ["comprar bateria"]

const adicionarTarefa = () => {
   if(tarefa !== undefined){
       ListaDeTarefas.push(tarefa)
       console.log("lista de tarefas:", ListaDeTarefas)
   }else{
       console.log(`Se quiser adicionar uma tarefa à lista, basta digitar 'npm run start "nome da tarefa"`)
   }            
}

adicionarTarefa() 
 