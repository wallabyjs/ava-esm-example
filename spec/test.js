import test from 'ava';
import foo from '../index.js';

test('should work', t => {
  t.true(foo() === 'foo', 'values do not match')
});