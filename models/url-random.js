
function urlRandomCodeCreate() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '1234567890'

  let collection = lowerCaseLetters + upperCaseLetters + number
  collection = collection.split('')

  let randomCode = ''
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * collection.length)
    randomCode += collection[index]
  }

  return randomCode
}

module.exports = urlRandomCodeCreate