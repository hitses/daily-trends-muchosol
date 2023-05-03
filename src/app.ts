import express from 'express'
import morgan from 'morgan'
import './db'

// import indexRoutes from './routes'

const app = express()

// Settings
app.set('port', 3000)

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
// app.use('/api', indexRoutes)

export default app
