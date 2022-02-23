**Exercício 1**
Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.

*a. Qual método HTTP você deve utilizar para isso?*
R: O método GET.

*b. Como você indicaria a **entidade** que está sendo manipulada?*
R: Utilizando o path "/users".


**Exercício 2** 
Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade `type` específica, recebendo apenas um `type` por vez. Após isso, responda:
    
*a. Como você passou os parâmetros de type para a requisição? Por quê?*
R: Passei como path params, porque entendi que seria mais adequado e o código ficaria mais limpo.

*b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?*
R: Utilizando o frontend, talez daria para selecionar o type em uma lista, mas no backend eu não tenho certeza sobre como fazer. Talvez indicando uma resposta específica quando o "type" não existir, utilizando o bloco if/else, por exemplo, ou um switch case.


**Exercício 3**
Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando por nome.
    
*a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
R: Query Params
b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
R: [no arquivo index]


**Exercício 4**
Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.
    
a. Mude o método do endpoint para `PUT`. O que mudou?
R: Não muda nada, porque o uso dos verbos no endpoint é apenas por padronização, não interfere na requisição.
b. Você considera o método `PUT` apropriado para esta transação? Por quê?
R: Ele pode ser usado, pois a ideia é que o PUT atualiza os recursos, podendo criar um novo caso ele não exista, mas o mais indicado neste caso é de fato o POST, já que a intenção é criar um usuário novo.