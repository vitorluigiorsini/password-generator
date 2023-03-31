interface IOptions {
  passwordLength: number
  hasLowerCase?: boolean
  hasUpperCase?: boolean
  hasNumbers?: boolean
  hasSymbols?: boolean
}

export default class GeneratePassword {
  private numbers: number[]
  private symbols: string[]
  private characteres: number[]
  private characteresLowerCase: string[]
  private characteresUpperCase: string[]
  constructor() {
    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.symbols = ['!', '@', '#', '$', '%', '^', '&', '*']
    this.characteres = Array.from(Array(26)).map((_, i) => i + 97)
    this.characteresLowerCase = this.characteres.map((item) =>
      String.fromCharCode(item)
    )
    this.characteresUpperCase = this.characteresLowerCase.map((item) =>
      item.toUpperCase()
    )
  }

  *randomIndex({
    optionsLength,
    passwordCharLength
  }: {
    optionsLength: number
    passwordCharLength: number
  }): Generator<number, unknown, unknown> {
    const lastPasswordCharLength = passwordCharLength - 1
    if (lastPasswordCharLength < 0) return
    yield Math.floor(Math.random() * optionsLength)
    yield* this.randomIndex({
      optionsLength,
      passwordCharLength: lastPasswordCharLength
    })
  }

  generate = ({
    passwordLength,
    hasLowerCase,
    hasUpperCase,
    hasNumbers,
    hasSymbols
  }: IOptions) => {
    const selectedOptions = () => {
      if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSymbols) {
        return this.characteresLowerCase
      }

      return [
        ...(hasLowerCase ? this.characteresLowerCase : []),
        ...(hasUpperCase ? this.characteresUpperCase : []),
        ...(hasNumbers ? this.numbers : []),
        ...(hasSymbols ? this.symbols : [])
      ] as string[]
    }

    const options = selectedOptions()

    const optionsIndexes = this.randomIndex({
      optionsLength: options.length,
      passwordCharLength: passwordLength
    })

    let password = ''
    for (const index of optionsIndexes) {
      password += options[index]
    }

    return password
  }
}
