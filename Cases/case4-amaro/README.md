# Projeto Amaro

Projeto desenvolvido como quarto Case para o curso de Web Full Stack da Labenu, turma *Carver*.

## Descrição

Este projeto é um desafio proposto para avaliação de candidatos da Amaro Team onde o candidato precisaria desenvolver uma API para cadastro e consulta de produtos

**Para saber mais, entre em https://github.com/amaroteam/back-end-challenge**

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- Typescript;
- express;
- cors;
- knex;
- uuid;
- dotenv;
- banco de dados mySQL;


## Documentação da API no Postman:

https://documenter.getpostman.com/view/18389097/UyrBjw2Q

## A API e seu funcionamento

### Clonando os arquivos do repositório

O projeto precisa ser clonado atraves do terminal, seguindo as intruções so próprio GitHub. Após clonagem, é necessário o comando 'npm install' no terminal, de forma a instalar as bibliotecas necessárias utilizadas no projeto.

### Conectando ao banco de dados

Para conectar o projeto ao banco de dados MySQL, é necesário que seja criado o arquivo '.env', na altura do arquivo package.json, com os dados necessários para que o arquivo BaseDatabase.ts (na pasta Data, dentro de src) rode corretamente, ou seja:
DB_HOST = host do banco de dados
DB_USER = nome de usuário
DB_SCHEMA = nome do schema
DB_PASSWORD = senha do schema
BCRYPT_COST = 12 (por padrão)

### Criando a tabela no mySQL

Após criação do arquivo .env, é necessário rodar o script migrations no terminal para que a tabela seja criada no MySQL.


## Inserir Produto

Para que um produto seja inserido, é necessário utilizar o endpoint "/product/new", sendo necessário também o uso do método POST e o envio de um body com os seguintes detalhes: 

{
    "name": "Nome do produto",
    "tag": "tag"
}

Caso tudo esteja certo a resposta deverá ser a seguinte:

{
    "message": "Sucesso!"
}

Caso o nome da produto ja esteja na lista de produtos um erro irá aparecer com a seguinte mensagem:

{
    "message": "Duplicate entry 'Blusa gola alta' for key 'name'"
}

## Consulta de Produtos
### Consulta por ID

Para consultar um produto por ID, é necessário utilizar o endpoint "/product/:id", método GET, com o envio do parâmetro ID do produto, da seguinte maneira:

{
    "id": "(ID do produto)"
}

Se o ID estiver correto a resposta virá com a descrição do produto no seguinte formato:

{
    "message": "Sucesso!",
    "product": [
        {
            "id": "b991a87b-151e-41bd-9055-0b0d491e0e33",
            "name": "VESTIDO TRICOT",
            "tag": "balada"
        }
    ]
}

### Consulta por nome
Para consultar um produto por nome, é necessário utilizar o endpoint "/product/:name" juntamente com o método GET, sendo necessário também o envio do parâmetro nome do produto, da seguinte maneira:

{
    "name": "Nome do produto"
}

Se o name estiver correto a resposta virá com a descrição do produto no seguinte formato:

{
    "message": "Sucesso!",
    "product": [
        {
            "id": "b991a87b-151e-41bd-9055-0b0d491e0e33",
            "name": "VESTIDO TRICOT",
            "tag": "balada"
        }
    ]
}


### Consulta por Tags
Para consultar um produto por tag, é necessário utilizar o endpoint "/product/search" juntamente com o método GET, sendo necessário também o envio do parâmetro tag a ser pesquisado, da seguinte maneira:

{
    "tags": "tag1"
}

Se a tag estiver correta a resposta virá com a descrição do produto no seguinte formato:

{
    "message": "Sucesso!",
    "product": [
        {
            "id": "b991a87b-151e-41bd-9055-0b0d491e0e33",
            "name": "VESTIDO TRICOT",
            "tag": "balada"
        }
    ]
}