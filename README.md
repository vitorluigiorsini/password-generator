# Password Generator

- NodeJs + TypeScript + Express API
- This API returns a random password based on the option parameters sent in the request

## Requisites

- node v18.14.2

## Install

- Clone the project:
```bash
$ git clone git@github.com:vitorluigiorsini/password-generator.git
```

- Installing dependencies:
```bash
$ npm install
```

- Run the app:
```bash
$ npm run dev
```

## Request method

- The method used in this request should be `POST`
- Theres is only one route in this project, and it is `'/password'`

## Request body

- This is an example of body that should be sent in the request:

```bash
#example
{
  "passwordLength": 10,
  "hasLowerCase": false,
  "hasUpperCase": true,
  "hasNumbers": true,
  "hasSymbols": false
}
```

*The only required parameter is the passwordLength. If only the password length attribute was passed, the api will return a random password with only lower-case characteres.
