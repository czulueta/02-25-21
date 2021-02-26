const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, interiorPrices) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(interiorPrices)
    })
})
interiorRouter.post("/", (req, res, next) => {
    const newInteriorChoice = new Interior(req.body)
    newInteriorChoice.save((err, savedChoices) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedChoices)
    })
})
module.exports = interiorRouter