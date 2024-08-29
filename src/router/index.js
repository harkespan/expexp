import express from "express"
const router = express.Router()
import dataRouter from './data.js'

router.use('/data', dataRouter)

router.use('*', (req, res) => {
    res.status(404).sendFile("./pages/404.html")
})

export default router