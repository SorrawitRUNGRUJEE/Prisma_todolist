const express = require('express')
const router = express.Router()
const error = require('../hdlError/hdlError')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


router.post('/register', (req, res, next) => {

    res.json({ msg: "this is register" })

})
router.put('/update', (req, res, next) => {

    res.json({ msg: "this is update" })

})
router.get('/find', (req, res, next) => {

    res.json({ msg: "this is get_user" })

})




module.exports = router



