require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('Hola mundo')
});

app.get('/usuarios', function(req, res){
    res.send('Usuario: Ariel')
})
app.post('/', function(req, res){
    res.send('POST del path/')
});

app.listen(port, ()=>{
    console.log(`Seerver started - Port ${port}`);
});