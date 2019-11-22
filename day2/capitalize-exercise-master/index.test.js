const capitalize = require('./index');

// --- Let's test for:
// if capitalize is a function
// if it capitalizes the first letter of every word of the string passed to it

// NOTE: run me by using `jest` or `jest index.test.js --watch` in this directory.
describe('capitalize', () => {
  it('is a function', () => {
    const type = typeof capitalize
    expect(type).toEqual('function') //typeof captialize === string
  })
  it('returns a sentence with every first letter capitalized', () => { })
  const output1 = captialize('simon has a grey sweater')
  const output2 = captialize('i love pizza')

  expect(output1).toEqual('Simon Has A Grey Sweater')
  expect(output2).toEqual('I Love Pizza')
})
