# crawly

make output crawl across your terminal all spooky like

### usage:

`npm install crawly`

**console usage:**
```javascript
console.crawly = require('crawly').log

var str = 'hello computer terminal blah bananas hamburgers food items shopping bag grocery store'
console.crawly(str)
```
or with an optional custom delay:
```javascript
console.crawly(str, 50)
```

**stream pipe usage**

```javascript
process.crawly = require('crawly').crawlstream
process.crawly.delay = 50
var fs = require('fs')

fs.createReadStream('file.txt').pipe(process.crawly)
```

#### Motivation:

I saw it in a movie once.

### License
MIT
