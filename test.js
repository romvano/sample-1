let assert = require('assert');
let plural = require('./public/main').plural;

assert.equal(plural(0, 'en'), 'times');
assert.equal(plural(1, 'en'), 'time');
assert.equal(plural(2, 'en'), 'times');
assert.equal(plural(10, 'en'), 'times');
assert.equal(plural(990, 'en'), 'times');
assert.equal(plural(0, 'de'), 'mal');
assert.equal(plural(1, 'de'), 'mal');
assert.equal(plural(2, 'de'), 'mal');
assert.equal(plural(110, 'de'), 'mal');
assert.equal(plural(0, 'ru'), 'раз');
assert.equal(plural(1, 'ru'), 'раз');
assert.equal(plural(2, 'ru'), 'раза');
assert.equal(plural(11, 'ru'), 'раз');
assert.equal(plural(12, 'ru'), 'раз');
assert.equal(plural(13, 'ru'), 'раз');
assert.equal(plural(22, 'ru'), 'раза');
assert.equal(plural(14, 'ru'), 'раз');
assert.equal(plural(27, 'ru'), 'раз');

