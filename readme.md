#  Testar rotas da API com insomnia
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
Próximos passos - Atuaizar no VSCode através do GitBash
```
* mkdir src/controllers
* touch src/controllers/crudController.js
* function listarDados(request, response) {
    response.send('Retorno de lista de informação do Banco de dados');
}

function gravarDados(request, response) {
    response.send('Método utilizado para salvar informações!');
}

function atualizarDados(request, response) {
    response.send('Método utilizado para editar informações!');
}

function deletarDados(request, response) {
    response.send('Método utilizado para deletar informações!');
}

module.exports = {
    listarDados,
    gravarDados, 
    atualizarDados, 
    deletarDados
}
* // Importar pacote do express
const { Router } = require('express');
// Instanciar o Router na variavel router
const router = Router();
// Importar funções do controller para a rota acessar as funções
const { 
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
 } = require('../controllers/crudController');

router.get('/listar', listarDados);

router.post('/gravar', gravarDados);

router.put('/atualizar/:id', atualizarDados);

router.delete('/deletar/:id', deletarDados);

module.exports = router;
```
# Testar requisições no Insomnia
```


<img src="./imagens/print re.png">
<img src="./imagens/print re2.png">
<img src="./imagens/print re3.png">
<img src="./imagens/print re4.png">