const calculator = require('./task3')

describe("my calculator", ()=>{
    test('adding 1+2 = 3', ()=>{
        expect(calculator.add(1, 2)).toBe(3)
    })
    test('substructing 2-1 = 1', ()=>{
        expect(calculator.subtract(2, 1)).toBe(1)
    })
    test('divide 2/1 = 2', ()=>{
        expect(calculator.divide(2, 1)).toBe(2)
    })
    test('multiplying 1*2 = 2', ()=>{
        expect(calculator.multiply(1, 2)).toBe(2)
    })
})