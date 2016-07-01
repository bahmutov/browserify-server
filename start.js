require('./index')
const mockOptions = require('./public-bundle')
const mock = require('mock-' + 'fs')
mock(mockOptions)

// mock({
//   'public/index.html': 'hi there'
// })
