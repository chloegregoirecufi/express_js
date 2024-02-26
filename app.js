const express = require('express');
const app = express();

//Routes d'accueil 
app.get('/', (req, res)=> {
    res.send('Hello word');
})

//Ecoute du serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`) 
})