import { expect, test, describe } from '@jest/globals'

import fizzbuzz from './fizzbuzz.js'

describe('FizzBuzz Module Test', () => {
  test('Accept a "Positive Integer" as its sole parameter', () => {
    expect(() => fizzbuzz(-11)).toThrow('Invalid Integer')
    expect(() => fizzbuzz(1.1)).toThrow('Invalid Integer')
  })

  test('Return "fizz" if the parameter is divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual('fizz')
    expect(fizzbuzz(6)).toEqual('fizz')
    expect(fizzbuzz(9)).toEqual('fizz')
  })

  test('Return "buzz" if the parameter is divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual('buzz')
    expect(fizzbuzz(10)).toEqual('buzz')
    expect(fizzbuzz(20)).toEqual('buzz')
  })

  test('Return "fizzbuzz" if the parameter is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz')
    expect(fizzbuzz(30)).toEqual('fizzbuzz')
    expect(fizzbuzz(45)).toEqual('fizzbuzz')
  })

  test('Return "" if the parameter is not divisible by 3 and 5', () => {
    expect(fizzbuzz(11)).toEqual('')
    expect(fizzbuzz(22)).toEqual('')
    expect(fizzbuzz(44)).toEqual('')
  })
})
