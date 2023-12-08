import express from 'express'
import routes from './src/routes/CRUD.js'
import morgan from 'morgan'
import {PORT} from './src/config/config.js'

const app = express()


// Settings

app.use(morgan('dev'));

app.set('port', PORT);

app.use(express.json())

// Routes

app.use('/Productos', routes);

export default app