import { Router } from 'express'

import { generatePassword } from '../functions/index.js'

const passwordRouter = Router()

passwordRouter.get('/', (req, res) => {
  const data = req.body
  try {
    const password = generatePassword.generate(data)

    res.status(200).send(password)
  } catch (error) {
    res.status(400).send('Bad request')
  }
})

export default passwordRouter
