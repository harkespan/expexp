import express from 'express'
import url from 'url'
import router from './router/index.js'
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
app.use(router)

//if you want get value from query browser
/** app.get('/data', (req, res) => {
    let id = req.query.id
    let name = req.query.name
    if(id && name)
    {
        res.send(`Data with id ${id} and name ${name}`)
    }
    else
    {
        res.send(`Get all data`)
    }
}) */



//pengecualian kalau url tidak ditemukan
