const Thing = require('../models/things')


exports.createThing = (req, res, next) => {
    delete req.body._id; // supprimer id avant de copier la requete car mongo creera un id automatique    
    const thing = new Thing({
        ...req.body // le corps de la requete sera automatiquement distribuer au donne du thing
    })

    // enregister dans la base de donnees avec la methode save 
    thing.save()
        .then(() => res.status(201).json({ message: 'Object enregistre avec succes' }))
        .catch(error => res.status(404).json({ error }));
}

exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object modifier avec succes' }))
        .catch(error => res.status(400).json({ error }))
}

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params._id })
        .then(() => res.status(200).json({ message: 'Object supprimer avec succes' }))
        .catch(error => res.status(400).json({ error }))
}

exports.getThingById = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }))
}

exports.getAllThings = (req, res, next) => {
    Thing.find() // Recuperation de tout les things de la bd 
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }))
}