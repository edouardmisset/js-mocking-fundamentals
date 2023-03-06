/**
 * Task: refactor the code to use an external mock module.
 *
 * Execute: Use `npx jest --watch src/no-framework/external-mock-module.js` to watch the test
 */

require('../__no-framework-mocks__/utils')

const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils.js')

require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler'],
])

// cleanup
delete require.cache[utilsPath]

/**
 * Checkout master branch to see the answer.
 */
