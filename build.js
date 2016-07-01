const files = ['index.html']
const join = require('path').join.bind(null, 'public')
const read = require('fs').readFileSync
const write = require('fs').writeFileSync
const mockOptions = {}
files.forEach((name) => {
  const fullName = join(name)
  mockOptions[fullName] = read(fullName, 'utf8')
})
console.log(mockOptions)
write('./public-bundle.json',
  JSON.stringify(mockOptions, null, 2) + '\n', 'utf8')

const fs = require('fs')
const browserify = require('browserify')
const insertGlobals = require('insert-module-globals')
browserify('./start.js', {
  builtins: false,
  commondir: false,
  insertGlobalVars: {
    __filename: insertGlobals.vars.__filename,
    __dirname: insertGlobals.vars.__dirname,
    process: function() {
      return;
    },
  },
  browserField: false,
})
.bundle()
.pipe(fs.createWriteStream('./dist/bundle.js'))
