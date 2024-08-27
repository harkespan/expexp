import express from 'express'
import url from 'url'

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile("./pages/home.html", {root:__dirname})
})

app.listen(port, () => {
    console.log(`Listening port at http://localhost:${port}`)
})

app.get('/about', (req,res) => {
    res.send('About')
})

app.get('/data', (req, res) => {
    let id = req.query.id
    let name = req.query.name
    if(id && name)
    {
        res.send(`Data with id ${id} and name ${name}`)
    }
    else
    {
        res.sendFile("./pages/404.html", {root:__dirname})
    }
})

//pengecualian kalau url tidak ditemukan
app.use('/', (req,res) => {
    res.status(404)
    res.sendFile("./pages/404.html", {root:__dirname})
})