const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

// Error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
