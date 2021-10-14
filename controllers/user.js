const user = require('../models/User')
const bcrypt = require('bcrypt');
const { use } = require('../routes/stuff');
const User = require('../models/User');
exports.signup = (req, res, next) => {

    // Hacharge || cryptage  du mot de passe avec Bcrypt
    bcrypt.hash(req.body.password, 10) // 10 pour tourner l'algrithme de hacharge 10 fois .
        // Plus le nombre est eleve plus le cryptage est plus for 
        // et le hacharge plus lent donc plus de temps
        .then(hash => {
            //creation du nouvel utilisateur avec le mot de passe crypter
            const user = new User({
                email: req.body.email,
                password: hash
            });
            // sauvegarde  dans la bd 
            user.save()
                .then(() => res.status(201).json({ Message: 'Utilisateur cree !' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error })) // 500  pour une erruer serveur 

}
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) { // si aucune addresse ne correspond
                return res.status(401).json({ error: 'Utilisateur non trouve' }) // 401 pour non autorise
            }
            // si mail existe
            // utiliser bcrypt pour comparaitre le mot de passe emtrer et celui de l'addresse
            bcrypt.compare(user.password, req.body.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect' })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: 'TOKEN'
                    })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error })) // 500 erreur serveur 
}