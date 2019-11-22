const fizzBuzz = require('./fizzBuzz.js')

describe('fizzBuzz', () => {
    it('should return an output', () => {
        const output = fizzBuzz(1)
        expect(output).toBe(1)

    })

    it('should return fizz if the number is a multiple of 3', () => {
        const output = fizzBuzz(3)
        const output2 = fizzBuzz(6)
        expect(output).toBe('fizz')    
        expect(output2).toBe('fizz')
    })

    it('should return buzz if the number is a multiple of 5', () => {
        const output = fizzBuzz(5)
        const output2 = fizzBuzz(10)
        expect(output).toBe('buzz')
        expect(output2).toBe('buzz')

    })

    it('should return fizzbuzz if the number is a multiple of 3 and 5', () => {
        const output = fizzBuzz(15)
        const output2 = fizzBuzz(30)
        expect(output).toBe('fizzbuzz')
        expect(output2).toBe('fizzbuzz')

    })

})