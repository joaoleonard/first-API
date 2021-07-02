const { request, response } = require('express');
var express = require('express');

const app = express();
const port = 3000;

const musicos = []; // conexão com o banco de dados

app.listen(port);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Primeira API')
})

app.post('/createMusico', (req, res) => {
    const {nome, idade, id} = req.body;
    musicos.push({nome, idade, id}); // cadastrar no banco
    res.send({nome, idade, id})
})

app.get('/listMusico', (request, response) => {
    response.send(musicos) // olhar no banco e listar
})
app.get('/listMusico/:id', (request, response) => {
    const { id } = request.params;
    const musico = musicos.find((item) => item.id === Number(id));
    response.send(musico) // olhar no banco e listar
})

console.log('servidor rodando')