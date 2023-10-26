# Clonando o projeto do gitHub , criar configuração da API e testar
```
Primeiros passos - Clonar pasta
```
* git clone URL_REPOSITORIO
```
Acessar pasta
```
* cd NOME_REPOSITORIO
```
Reinstalar pacote de aplicação
```
* npm i
```
Próximos passos - Atualize o projeto
```
* nano .env
* PORT = 3008
* nano .gitignore
* .env
```
Abrir no VSCode
```
* code .
```
Construir no VSCode
```
* nano .env.example
* PORT = 
* const express = require('express');
* const dotenv = require('dotenv').config();
* const app = express();
* app.set('port', process.env.PORT || 3333);
* module.exports = app;
* const app = require('./app');
* const port = app.get('port');
* app.listen(port, () => {
    console.log(`Running on port ${ port }!`);
});
* "start":"nodemon src/server.js"
```
Rodar comandos no Gitbash
```
* npm run start
* git add .
* git commit -m 'configuração do projeto'
```
Enviar para o GitBash
```
* git push
* cd ..
* rm -rf projetoBackend
```
Conclusão do passo 2
```