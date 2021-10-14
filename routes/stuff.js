const express = require('express')
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');


//Requete POST
router.post('/', stuffCtrl.createThing);

// Update object
router.put('/:id', stuffCtrl.modifyThing);

// Delete 
router.delete('/:id', stuffCtrl.deleteThing);

// Get by Id
router.get('/:id', stuffCtrl.getThingById);

// Requete GET
router.use('/', stuffCtrl.getAllThings);

module.exports = router;