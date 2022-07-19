import express from 'express'
import {PORT} from './config.js'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'

const app = express();

app.use(indexRoutes)
app.use(cors)

app.listen(PORT)
console.log(`server is running on port ${PORT}`)



