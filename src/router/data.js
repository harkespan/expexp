import express from "express"
const dataRouter = express.Router();

dataRouter.route('/')
.get((req,res) => {
    res.send(`Get all data`)
})
.post( (req, res) => {
    res.send(`Post data`)
})

dataRouter.route('/:id')
.get((req, res) => {
    let id = req.params.id
    res.send(`Get data with id ${id}`)
})
.put((req, res) => {
    let id = req.params.id
    res.send(`Updating data on id ${id}`)
})
.delete((req, res) => {
    let id = req.params.id
    res.send(`Deleting data on in ${id}`)
})

export default dataRouter