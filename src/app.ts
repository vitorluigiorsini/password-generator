import express from 'express'

// routes
import errorNotFound from './routes/ErrorNotFound.js'
import passwordRouter from './routes/PasswordRoute.js'

const app = express()
app.use(express.Router())

app.use(express.json())
app.use('/password', passwordRouter)
app.use('/*', errorNotFound)

const PORT = <number | undefined>process.env.PORT || 5000
app
  .listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at ${PORT}`)
  })
  .once('error', (error) => {
    console.error('Server failed', error)
    process.exit(1)
  })
