# Five letter word generator

This is a NodeJS module that generates five letter english words.

Words are taken from [Best Word List](https://www.bestwordlist.com/index.htm).

## Usage

Import the module:

```js
const gen = require('five-letter-word-generator');
```

Get a random word:

```js
// Returns a string
const word = gen.getRandomWord();
```

Check if a word is in the word list:

```js
// Returns a boolean
const isValid = gen.isInWords('crane');
```

Get the word list:

```js
// Returns an array of strings
const words = get.getWords();
```
