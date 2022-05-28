import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index'


/***** Capitalize Tests *****/
test('Capitalze 1st Character', () => {
  expect(capitalize('bowl')).toBe('Bowl')
});

test('Capitalize different string', () => { 
  expect(capitalize('soup')).toBe('Soup')
});

test('Un-capitalize other characters', () => {
  expect(capitalize('sOUP')).toBe('Soup')
});

test('Works with spaces', () => {
  expect(capitalize('i loVe pIzza')).toBe('I love pizza')
});




/***** Reverse String Tests *****/
test('Reverses String', () => {
  expect(reverseString('Panel')).toBe('lenaP')
});

test('Reverse Sentences', () => {
  expect(reverseString('This is Sparta')).toBe('atrapS si sihT')
});




/***** Calculator Tests *****/
test('Add', () => {
  expect(calculator.add(2,3)).toBe(5)
});

test('Substract', () => {
  expect(calculator.substact(9,3)).toBe(6)
});

test('Multiply', () => {
  expect(calculator.multiply(3,4)).toBe(12)
});

test('Divide', () => {
  expect(calculator.divide(12,4)).toBe(3)
});



/***** Caesar Cipher Tests *****/
test('Simple Shift', () => {
  expect(caesarCipher('love', 5)).toBe('qtaj')
});

test('Punctuations', () => {
  expect(caesarCipher('love!', 5)).toBe('qtaj!')
});

test('Spaces', () => {
  expect(caesarCipher('i love books', 23)).toBe('f ilsb yllhp')
});

test('z to a wrapping', () => {
  expect(caesarCipher('zebra', 11)). toBe('kpmcl')
});

test('Keep same case', () => {
  expect(caesarCipher('Sunny', 5)).toBe('Xzssd')
});


/***** Analyze Array Tests *****/
test('Average', () => {
  expect(analyzeArray([2,3,4])).toEqual(
      expect.objectContaining({'average': 3})
  )
})

test('Average with floats', () => {
  const obj = analyzeArray([3,4,6])
  expect(obj['average']).toBeCloseTo(4.3333)
})

test('Length', () => {
  const object = analyzeArray([2,5,6])
  expect(object['length']).toBe(3)
})


test('Min', () => {
  const obj = analyzeArray([1,4,-4,6])
  expect(obj['min']).toBe(-4)
})

test('Max', () => {
  expect(analyzeArray([3,6,9,1])).toEqual(
    expect.objectContaining({'max': 9})
  )
})