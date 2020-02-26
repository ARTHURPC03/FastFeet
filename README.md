# FastFeet



## :rocket: Sobre o desafio

A aplicação que iremos dar início ao desenvolvimento a partir de agora é um app para uma transportadora fictícia, o FastFeet.

Nesse primeiro desafio vamos criar algumas funcionalidades básicas que aprendemos ao longo das aulas até aqui. Esse projeto será desenvolvido aos poucos até o fim da sua jornada onde você terá uma aplicação completa envolvendo back-end, front-end e mobile, que será utilizada para a **certificação do bootcamp**, então, bora pro código!

#### **Pré-requisitos**

O que você precisa ter instalado em sua máquina: 

- Docker
- Node.js
- Yarn (Opcional)


### **Como usar este projeto**

```
docker run --name fastfeet -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

yarn
yarn sequelize db:migrate
yarn sequelize db:seeds:all
yarn dev
```

Após o servidor estar rodando você pode usar o Insomnia para testar as rotas da aplicação

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=FASTFEET&uri=https%3A%2F%2Fgithub.com%2FARTHURPC03%2FFastFeet%2Fblob%2Fmaster%2FInsomnia_2020-02-26.json)

### **Um pouco sobre as ferramentas**

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgreSQL ou MySQL);

#### **Comandos e dependências utilizadas**

```
 yarn init -y
 yarn add express
 yarn add sucrase nodemon -D
 docker run --name fastfeet -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
 yarn add eslint -D
 yarn eslint --init
 yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
 yarn eslint --fix src --ext .js
 yarn add sequelize
 yarn add sequelize-cli -D
 yarn add pg pg-hstore
 yarn sequelize db:migrate
 yarn sequelize db:migrate undo
 yarn sequelize db:seed:all
 yarn add bcryptjs
 yarn add jsonwebtoken
 yarn add yup
```


### **Funcionalidades**

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação.

### 1. Autenticação

Permita que um usuário se autentique em sua aplicação utilizando e-mail e uma senha.

Crie um usuário administrador utilizando a funcionalidade de seeds do sequelize, essa funcionalidade serve para criarmos registros na base de dados de forma automatizada.

- A autenticação deve ser feita utilizando JWT.
- Realize a validação dos dados de entrada;

### 2. Gestão de destinatários

Você agora precisa permitir que destinatários sejam mantidos (cadastrados/atualizados) na aplicação, e esses devem ter o **nome** do destinatário e campos de endereço: **rua**, **número**, **complemento**, **estado**, **cidade** e **CEP**.

Utilize uma nova tabela no banco de dados chamada `recipient` para guardar informações do destinatário.

O cadastro de destinatários só pode ser feito por administradores autenticados na aplicação.

O destinatário não pode se autenticar no sistema, ou seja, não possui senha.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
