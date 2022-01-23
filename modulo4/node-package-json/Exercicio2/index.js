// 2.
switch(process.argv[2]){
   case "add":
      const add = Number(process.argv[3]) + Number(process.argv[4])
      console.log(`Resposta: ${add}`)
      break;
   case "sub":
      const sub = Number(process.argv[3]) - Number(process.argv[4])
      console.log(`Resposta: ${sub}`)
      break;
   case "mult":
      const mult = Number(process.argv[3]) * Number(process.argv[4])
      console.log(`Resposta: ${mult}`)
      break;
   case "div":
      const div = Number(process.argv[3]) / Number(process.argv[4])
      console.log(`Resposta: ${div}`)
      break;
   default:
      console.log(`Verifique os dados enviados: Primeiro a operação (add para adição // sub para subtração // mult para multiplicação // div para divisão) e em seguida os numerais, separados por espaço.`)   
}
