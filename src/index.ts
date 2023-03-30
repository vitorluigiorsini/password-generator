import { generatePassword } from './functions/index.js'

console.log(
  'Password: ' +
    generatePassword.generate({
      passwordLength: 18,
      hasLowerCase: false,
      hasUpperCase: false,
      hasNumbers: false,
      hasSymbols: false
    })
)
