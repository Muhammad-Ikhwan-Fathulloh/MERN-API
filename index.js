const express = require('express')

const app = express()

const authRoutes = require('./src/routes/auth')
const blogRoutes = require('./src/routes/blog')

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500
    const message = error.message
    const data = error.data
    res.status(400).json({ message: message, data: data })
})

app.use('/v1/auth', authRoutes)
app.use('/v1/blog', blogRoutes)

app.listen(4000)