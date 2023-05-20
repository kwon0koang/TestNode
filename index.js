const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

// ========================================================================================================================================================================
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:userid', (req, res) => {
    const q = req.params
    res.json({ 'userid': q.userid })
})

app.get('/user', (req, res) => {
    const q = req.query
    res.json({ 'userid': q.userid })
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)
    if (name == "dog") {
        res.json({ 'sound': '멍멍' })
    } else if (name == "cat") {
        res.json({ 'sound': '야옹' })
    } else if (name == "pig") {
        res.json({ 'sound': '꿀꿀' })
    } else {
        res.json({ 'sound': '알 수 없음' })
    }
})
// ========================================================================================================================================================================

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
