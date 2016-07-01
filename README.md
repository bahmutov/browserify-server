# browserify-server

Bundling static folder into a single JavaScript Node app bundle (example)

Install dependencies first `npm install`

Run in "normal" code `npm start` - then request `public/index.html`
using `http localhost:3000`

```
$ http localhost:3000
HTTP/1.1 200 OK
<!DOCTYPE html>
<html>
<head>
  <title>example</title>
</head>
<body>
<h2>index page</h2>
</body>
</html>
```

Now bundle *all code and public folder* into a single JavaScript file

```
npm run bundle
> node build.js
{ 'public/index.html': '<!DOCTYPE html>\n<html>\n<head>\n ... </html>\n' }
```

The bundle [dist/bundle.js](dist/bundle.js) contains all server code
and [public/index.html](public/index.html) contents.

```
$ grep DOCTYPE dist/bundle.js
"public/index.html": "<!DOCTYPE html>\n...</html>\n"
```

The command to run the bundle changes the working folder to `dist`, making
sure we do not accidentally serve `./public/index.html`. We can even
remove `public` folder now

```
mv public tmp
npm run run
running in /git/browserify-server/dist
listening on port 3000
```

Making the request from another terminal still works.

## How

Includes the HTML contents in the bundle and during execution mocks the
file system for `serve-static` middleware using
[mock-fs](https://github.com/tschaub/mock-fs) module.

### Small print

Author: Gleb Bahmutov &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/browserify-server/issues) on Github
