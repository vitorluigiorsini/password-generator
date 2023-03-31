import { Router } from 'express'

const errorNotFound = Router()

errorNotFound.get('/', (req, res) => {
  res.status(404).send('Not found')
})

export default errorNotFound
