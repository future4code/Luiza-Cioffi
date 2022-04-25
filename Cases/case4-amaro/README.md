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


## A API e seu pleno funcionamento serão descritos a seguir:

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

Para que um produto seja inserido, é necessário utilizar o endpoint "/product/insert", sendo necessário também o uso do método POST e o envio de um body com os seguintes detalhes: 

{
    "name": "(Nome do produto)",
    "tags": "tag)"
}

Exemplo:

![body products]

Caso tudo esteja certo a resposta deverá ser a seguinte:

![resposta inserir produto]

Caso o nome da produto ja esteja na lista de produtos um erro irá aparecer com a seguinte mensagem:

![erro nome repetido]

## Consulta de Produtos
### Consulta por ID

Para consultar um produto por ID, é necessário utilizar o endpoint "/product/search" juntamente com o método GET, sendo necessário também o envio de um body com o ID do produto, da seguinte maneira:

{
    "id": "(ID do produto)"
}

Exemplo:

![busca por id]

Se o ID estiver correto a resposta virá com a descrição do produto no seguinte formato:

![produto buscado por id]

### Consulta por nome
Para consultar um produto por nome, é necessário utilizar o endpoint "/product/search" juntamente com o método GET, sendo necessário também o envio de um body com o nome do produto, da seguinte maneira:

{
    "name": "Nome do produto"
}

Exemplo:

![busca por nome]
Caso o nome exista na lista de produtos a API retornará:

![retorno exato busca por nome]

Lembrando que ao consultar um produto com uma palavra aproximada, não exata, a API retornará todos os produtos com o nome inserido:

![retorno não exato busca por nome]

Caso não haja produto com o respectivo nome ou chave de consulta, o seguinte erro aparecerá:

[erro busca por nome]

### Consulta por Tags
Para consultar um produto por tag, é necessário utilizar o endpoint "/product/search" juntamente com o método GET, sendo necessário também o envio de um body com a tag a ser pesquisada, da seguinte maneira:

{
    "tags": "tag1"
}

Exemplo:

[busca por tag]
Caso a tag exista na lista de produtos a API retornará todos os produtos que contém esta tag:

[retorno tag]

Caso não haja produto com a respectiva tag, o seguinte erro aparecerá:

[erro busca por nome]


