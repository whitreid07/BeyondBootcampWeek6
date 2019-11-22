const add = require('./add.js');

test('adds 1 + 2 to equal 3', () => {
    const output = add(1, 2)
    expect(output).toBe(3)
})

