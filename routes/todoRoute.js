
const express = require('express')
const router = express.Router()
const error = require('../hdlError/hdlError')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.post('/new', (req, res, next) => {
    const { username, password, email } = req.body
    if (!username || !password) return next(error("username/password require", 400))
    // res.json({msg:"this is creating new to-do list"})

})
router.put('/change', (req, res, next) => {

    res.json({ msg: "this change_todo" })

})
router.delete('/delete', (req, res, next) => {

    res.json({ msg: "this is Delete_todo" })
})



module.exports = router;