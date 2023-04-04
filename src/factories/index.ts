import GenerateService from '../services/GenerateService.js'

const generateInstance = () => {
  const generatePassword = new GenerateService()

  return generatePassword
}

export { generateInstance }
