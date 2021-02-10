const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
require('./config/database')
const authRouter = require('./routers/authRouter')

const app = express()

app.use(express.json())
app.use(cookieParser())

// - - - routers - - -
app.use('/api/auth', authRouter)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server connected, listening on port ${port}`))