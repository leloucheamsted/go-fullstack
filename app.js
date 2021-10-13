const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('Requete recu');
    next() // Pour passr a la requete suivante
})
app.use((req, res, next) => {
    res.json({ message: 'Votre requete a bien ete recu ' })
})

module.exports = app // Pour pouvoir utiliser le fichier aps