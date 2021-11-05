

# LISTA DE CONTATOS 

## Agenda de contatos pessoal

O objetivo desse projeto é você desenvolver uma aplicação do começo ao fim, utilizando as tecnologias aprendidas durante o curso de desenvolvimento web full stack.

A aplicação trata-se de uma agenda pessoal, onde você pode fazer um cadastro de e autenticar-se. Após se autenticar, o usuário pode adicionar, editar, remover e listar contatos em sua agenda.

Você pode ver e testar a aplicação nesse link => [https://cubosagenda.netlify.app/](https://cubosagenda.netlify.app/)

--- 


## Instruções para uso da API

Você pode importar a `collection` no seu insominia para testar a `api`, basta importar para o seu insominia o arquivo ` Insomnia_2021-10-14.json` que está na pasta `collection` nesse repositório.

Essa `API` possui uma rotas para `login` e `contatos`, veja no exemplo abaixo o uso de cada rota.


### Endpoints de `Autenticação`

Essa coleção permite você fazer a autenticação de um usuário.

#### 1. `POST`  https://cubos-api-contacts.herokuapp.com/login
Nesse endpoint você pode fazer a autenticação de um usuário existe, para isso você passar no `body` as propriedades como no exemplo abaixo:

```json=
{
  "email": "daniel.lopes@cubos.academy",
  "senha": "123456"
}
```

Obs.: o retorno de um usuário autenticado segue o exemplo abaixo:
```json=
{
  "usuario": {
    "id": 2,
    "nome": "Daniel Lopes",
    "email": "daniel.lopes@cubos.academy"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM0MjQwODIzLCJleHAiOjE2MzQyNjk2MjN9.ZfJW04QQSnMy1YuwHChA5cJF8ppkGBVEmVAHtksPHGM"
}
```

O token, deve ser enviado nas requisições autenticadas, que estarão marcadas aqui no README.

---

### Endpoints de `Usuário`

#### 1. `POST` (Aberta)  https://cubos-api-contacts.herokuapp.com/usuarios
Nesse endpoint você pode fazer o cadastro de um novo usuário no seu sistema,
para cadastrar um usuário você deve enviar o `body` no seguinte formato:

```json=
{
  "nome": "Danile Lopes",
  "email": "daniel.lopes@cubos.academy",
  "senha": "123456"
}
```

---

### Endpoints de `Contato`

#### 1. `GET` (Autenticada) https://cubos-api-contacts.herokuapp.com/contatos
Esse endpoint irá listar todos os contatos cadastrados, exemplo:

```json=
[
  {
    "id": 12,
    "usuario_id": 2,
    "nome": "Guido Cerqueira Santos",
    "email": "guido.cerqueira@cubos.academy",
    "telefone": "99999999999"
  },
  {
    "id": 13,
    "usuario_id": 2,
    "nome": "Daniel de Andrade Lopes",
    "email": "daniel.lopes@cubos.academy",
    "telefone": "99999999999"
  }
]
```

#### 2. `GET` (Autenticada) https://cubos-api-contacts.herokuapp.com/contatos/1
Esse endpoint listará apenas um contato (quando ela existir), o retorno inicial será:

```json=
{
  "id": 13,
  "usuario_id": 2,
  "nome": "Daniel de Andrade Lopes",
  "email": "daniel.lopes@cubos.academy",
  "telefone": "99999999999"
}
```

#### 3. `POST` (Autenticada) https://cubos-api-contacts.herokuapp.com/contatos
Nesse endpoint você pode cadastrar outros contatos, o `body` para o cadastro precisa seguir o seguinte formato:

```json=
{
  "nome": "Joaozinho",
  "telefone":"99999999999",
  "email":"joaozinho@cubos.academy"
}
```


#### 4. `DELETE` (Autenticada) https://cubos-api-contacts.herokuapp.com/contatos/1

Esse endpoint permite fazer a deleção de um contato, como bem sabemos, ele não possui `body`, só é necessário passarmos o `id` do contato na rota.


#### 5. `PUT` (Autenticada) https://cubos-api-contacts.herokuapp.com/contatos/1
Esse endpoint permite que você faça a atualização de um contato, para atualizar basta você passar o `id` do contato na rota e enviar o `body` completo, como no exemplo abaixo:

```json=
{
  "nome": "Joãozera",
  "telefone":"(99)99999-9999",
  "email":"joao.teste@cubos.academy"
}
```



