export default function fizzbuzz(num) {
  let str = ''
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error('Invalid Integer')
  } else {
    str += num % 3 === 0 ? 'fizz' : ''
    str += num % 5 === 0 ? 'buzz' : ''
  }
  return str
}
