import bcrypt from 'bcrypt'

export const CS = {
  isEmpty(value) {
    value = value.trim()
    if (value === null) return true
    if (value === 'undefined') return true
    if (typeof value === 'undefined') return true
    if (typeof value === 'string' && value === '') return true
    if (Array.isArray(value) && value.length < 1) return true
    if (
      typeof value === 'object' &&
      value.constructor.name === 'Object' &&
      Object.keys(value).length < 1 &&
      !Object.getOwnPropertyNames(value)
    )
      return true
    if (typeof value === 'object' && value.constructor.name === 'String' && Object.keys(value).length < 1) return true
    return false
  },
  isEmail(email) {
    const regexEmail =
      /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    if (regexEmail.test(email)) return true
    return false
  },
  isPassword(password) {
    const regexPassword = /^[a-zA-Z0-9][a-zA-Z0-9~!@#$%^&*()_]{8,15}$/g
    if (regexPassword.test(password)) return true
    return false
  },
  encrypt(value) {
    const encrypt = bcrypt.hashSync(value, 10)
    return encrypt
  },
}
