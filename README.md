# deepget
Small package to get deep nested properties from JavaScript objects

## Install

```sh
# npm
npm install dpgt --save

# yarn
yarn add dpgt
```

### Use

Import the utility and get nested properties passing the object and the key path.

```js
import deepget from 'dpgt';

// some object with nested properties
const cartoon = {
  title: 'Rick and Morty',
  seasons: 3,
  characters: {
    rick: {
      firstName: 'Rick'
      lastName: 'Sanchez'
    },
    morty: {
      firstName: 'Morty'
      lastName: 'Smith'
    },
  }
};

deepget(cartoon, 'characters.rick.lastName');
// 'Sanchez'
```

You can also use an array as a key path.

```js
deepget(cartoon, [ 'characters', 'rick', 'lastName' ]);
// 'Sanchez'
```

Default values are supported too as a thrid optional argument.

```js
deepget(cartoon, [ 'characters', 'beth' ], 'Not found');
// 'Not found'
```
