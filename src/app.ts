import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'

// routes
import errorNotFound from './routes/ErrorNotFound.js'
import passwordRouter from './routes/PasswordRoute.js'

const app = express()
app.use(express.Router())

app.use(express.json())
app.use('/password', passwordRouter)
app.use('/*', errorNotFound)

const PORT = process.env.PORT

app
  .listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
  })
  .once('error', (error) => {
    console.error('Server failed', error)
    process.exit(1)
  })
