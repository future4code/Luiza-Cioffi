// 1.
// a) 
// Podemos acessar através do comando process.argv[x], onde x é igual à posição no array em que se encontra o parâmetro na linha de comando, lembrando que se a posição for 0 será sempre "node" e se for 1 será sempre a pasta onde se encontra o arquivo.
// b) 
// const name = process.argv[2]
// const age = process.argv[3]
// console.log(`Olá, ${name}! Você tem ${ age } anos.`)
// c)
// const name = process.argv[2]
// const age = process.argv[3]
// const newAge = Number(age) + 7
// console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}`)

// 2.
// switch(process.argv[2]){
//    case "add":
//       const add = Number(process.argv[3]) + Number(process.argv[4])
//       console.log(`Resposta: ${add}`)
//       break;
//    case "sub":
//       const sub = Number(process.argv[3]) - Number(process.argv[4])
//       console.log(`Resposta: ${sub}`)
//       break;
//    case "mult":
//       const mult = Number(process.argv[3]) * Number(process.argv[4])
//       console.log(`Resposta: ${mult}`)
//       break;
//    case "div":
//       const div = Number(process.argv[3]) / Number(process.argv[4])
//       console.log(`Resposta: ${div}`)
//       break;
//    default:
//       console.log(`Verifique os dados enviados: Primeiro a operação (add para adição // sub para subtração // mult para multiplicação // div para divisão) e em seguida os numerais, separados por espaço.`)   
// }

// 3.
//  const tarefa = process.argv[2]

// const ListaDeTarefas = ["comprar bateria"]

// const adicionarTarefa = () => {
//    if(tarefa !== undefined){
//        ListaDeTarefas.push(tarefa)
//        console.log("lista de tarefas:", ListaDeTarefas)
//    }else{
//        console.log(`Se quiser adicionar uma tarefa à lista, basta digitar 'npm run start "nome da tarefa"`)
//    }            
// }

// adicionarTarefa() 
 