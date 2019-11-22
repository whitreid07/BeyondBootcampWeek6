What are the pillars of functional programming?
- Declarative (vs Imperative) 
- Functional Purity
- Avoiding side effects
- Functional Composition
- Immutability
- Referential TransparencyWhat is the difference between declarative and imperative code?-> Imperative: 
  - Focuses on HOW (vs. WHAT)
  - Procedural
  - Series of steps or instructions
-> Declarative: 
  - Outcome focused.
  - Easier to read because... it looks like english
  - It looks like english because we leverage abstractionWhat is functional purity?
- If given a certain input, will always return the same output
- Accomplishes this by not relying on values that live outside of the function (side effects)
- Pure functions are important because they are predictable.What is a side effect?
- Something that occurs outside of the function that changes how it works, E.G
  - A variable that changes over time (like the Date)
  - API RequestsWhat is referential transparency?
- Replace the function call with its resulting value without changing the meaningWhat is function chaining?
- Combining functions one after the other
- Things that return things that have methods on them so you can call them one after the other in a sequence  - Array methods
  - jQuery- Pointerless programming:
```javascript
  animals // array
    .map(animal => animal + 's') // call map method on it
    // returns an array
    // that we call the filter method on
    .filter(animal => animal.species === 'bird')
``````javascript
const getPluralBirds = () => animals
    .map(animal => animal + 's')
    .filter(animal => animal.species === 'bird')
    .map(animal => animal + 's')
    .filter(animal => animal.species === 'bird')
    .map(animal => animal + 's')
    .filter(animal => animal.species === 'bird')
```What is function composition?
- A function should do ONE thing. And do it well.
- A violin should never try to be a cello.
- Take all your functions that each do one thing well and you use them together. That's called composition.What is immutability?
- A data structure that can't be changed
- Primitives are IMMUTABLE.```javascript
let myNumber = 10
myNumber = 5 // re assignment NOT mutation
```- Mutable data structures are non-primitives```javascript
const myArray = []myArray.push('dog')
```
