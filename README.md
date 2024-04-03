## 🔖 Sobre

Esta é uma simples aplicação onde usuários podem criar posts e comentários para seus posts.

## ⤵ Instruções de utilização

Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes.

Pré-requisitos:
  - NodeJS
  - NPM
  - Docker (Docker-Compose)

<br>

- Passo 1: Clonar o repositório:
  ```bash
  $ git clone https://github.com/bielalpha/automatic-funicular.git
  ```

<br>

- Passo 2: Ir para pasta onde o projeto foi clonado
  
<br>

- Passo 3: Executar o docker compose com o comando:
  ```bash
  $ docker-compose up --build
  ```
- API estará rodando em http://localhost:3000/

## End-points dos posts
### POST /api/post/createPost

#### Como usar:
Faça uma solicitação POST para `/api/post/createPost` com os seguintes parâmetros no corpo da solicitação:

- `title` (string): O título do post.
- `content` (string): O conteúdo do post.
- `author` (string): O Autor do post.

Exemplo do formato do json:

```json
{
  "title": "Postagem",
  "content": "Postagem realizar para teste",
  "author": "Gabriel da silva de araujo"
}
```

### GET /api/post/getPosts
#### Como usar:
Faça uma solicitação GET para `/api/post/getPosts` sem a necessidade parâmetros no corpo da solicitação é possivel consultar todos os `posts`.

Retorno esperado:

```json
{
  "posts": [
    {
      "_id": "660d813ce09834a583f11fd8",
      "title": "Postagem",
      "content": "Postagem realizar para teste",
      "author": "Gabriel da silva de araujo",
      "comments": [],
      "createdAt": "2024-04-03T16:18:04.893Z",
      "updatedAt": "2024-04-03T16:18:04.893Z",
      "__v": 0
    }
  ]
},
{
  "posts": [
    {
      "_id": "660d8535e09834a583f11fdb",
      "title": "Postagem",
      "content": "Postagem realizar para teste",
      "author": "Gabriel da silva de araujo",
      "comments": [],
      "createdAt": "2024-04-03T16:18:04.893Z",
      "updatedAt": "2024-04-03T16:18:04.893Z",
      "__v": 0
    }
  ]
}
```

### GET /api/post/getPost/:id
#### Como usar:
Faça uma solicitação GET para `/api/post/getPost/:id` com o parametro `:id` é possivel consultar apenas um `post`.

Retorno esperado:

```json
{
  "posts": [
    {
      "_id": "660d813ce09834a583f11fd8",
      "title": "Postagem",
      "content": "Postagem realizar para teste",
      "author": "Gabriel da silva de araujo",
      "comments": [],
      "createdAt": "2024-04-03T16:18:04.893Z",
      "updatedAt": "2024-04-03T16:18:04.893Z",
      "__v": 0
    }
  ]
}
```

### PUT /api/post/updatePost/:id
#### Como usar:
Faça uma solicitação PUT para `/api/post/updatePost/:id` com o parametro `:id` é possivel atualizar o `post`.

Retorno esperado:

```json
{
  "title": "Postagem",
  // Alterado o conteudo da postagem
  "content": "Postagem realizar para teste do update",
  "author": "Gabriel da silva de araujo"
}
```

### DELETE /api/post/deletePost/:id
#### Como usar:
Faça uma solicitação DELETE para `/api/post/deletePost/:id` com o parametro `:id` é possivel deletar o `post`.

Retorno esperado:

```json
{
  "message": "Post deleted successfully"
}
```

## End-points dos comments

### POST /api/comment/createComment/:id
#### Como usar:
Faça uma solicitação POST para `/api/comment/createComment/:id` com o parametro `:id` do `post` desejado é possivel criar um ou mais comentarios.

- `content` (string): O conteúdo do post.
- `author` (string): O Autor do post.
- 
Exemplo do formato do json:

```json
{
  "content": "Comentário criar para testar ligação do comment com o post 2",
  "author": "Gabriel da silva de araujo"
}
```

### GET /api/comment/getCommentsByPost/:id
#### Como usar:
Faça uma solicitação GET para `/api/comment/getCommentsByPost/:id` com o parametro `:id` do `post` desejado é possivel lista todos os cometários do post em questão.

Retorno esperado:

```json
{
  "comments": [
    {
      "_id": "660d8e60e09834a583f11fdf",
      "content": "Comentário criar para testar ligação do comment com o post 2",
      "author": "Gabriel da silva de araujo",
      "createdAt": "2024-04-03T17:14:08.629Z",
      "__v": 0
    },
    {
      "_id": "660d8ef2e09834a583f11fe4",
      "content": "Comentário criar para testar ligação do comment com o post 2",
      "author": "Gabriel da silva de araujo",
      "createdAt": "2024-04-03T17:16:34.565Z",
      "__v": 0
    }
  ]
}
```

### PUT /api/comment/getCommentsByPost/:id
#### Como usar:
Faça uma solicitação PUT para `/api/comment/updateComment/:id` com o parametro `:id` do `comment` desejado é possivel alterar os dados do comentário.

Retorno esperado:

```json
{
  "content": "Comentário criar para testar ligação do comment com o post 2",
  "author": "Gabriel da silva de araujo"
}
```

### DELETE /api/comment/deleteComment/post/:id/comment/:id
#### Como usar:
Faça uma solicitação DELETE para `/api/comment/deleteComment/post/:id/comment/:id` com o parametro `:id` do `post`  e `comment` desejado é deletar o comentário desejado.

Retorno esperado:

```json
{
  "message": "Comment deleted successfully"
}
```
