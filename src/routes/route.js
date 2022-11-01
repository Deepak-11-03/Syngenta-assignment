const express =require('express')
const router = express.Router();
const controller =require('../controller/controller')

router.post('/organisation' , controller.createOrganisation)
router.get('/getall' , controller.getOrganisation)

module.exports =router