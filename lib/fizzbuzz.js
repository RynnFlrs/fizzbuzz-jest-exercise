export default function fizzbuzz(num) {
  let str = ''
  if (Number.isInteger(num) && num > 0) {
    str += num % 3 === 0 ? 'fizz' : ''
    str += num % 5 === 0 ? 'buzz' : ''
  } else {
    throw new Error('Invalid Integer')
  }
  return str
}
