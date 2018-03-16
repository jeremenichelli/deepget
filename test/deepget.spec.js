import test from 'ava';
import deepget from '../src/deepget.js';

// object for testing
const sample = {
  wubba: {
    lubba: {
      dub: 'dub'
    }
  }
};

test('accepts path argument as string', t => {
  t.is(deepget(sample, 'wubba.lubba.dub'), 'dub');
});

test('accepts path argument as array', t => {
  t.is(deepget(sample, [ 'wubba', 'lubba', 'dub' ]), 'dub');
});

test('accepts fallback value as third argument', t => {
  t.is(deepget(sample, 'friends.birdperson', 'Bird Person'), 'Bird Person');
});

test('returns undefined when a property is not found', t => {
  t.is(deepget({ }, 'some'), undefined);
});

test('accepts null as a returned value', t => {
  t.is(deepget({ some: null }, 'some'), null);
});

test('accepts number as a returned value', t => {
  t.is(deepget({ some: 5 }, 'some'), 5);
});

test('accepts falsy Boolean as a returned value', t => {
  t.is(deepget({ some: false }, 'some'), false);
});

test('accepts strings as a returned value', t => {
  t.is(deepget({ some: 'false' }, 'some'), 'false');
});
