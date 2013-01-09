var fs = require('fs')
process.crawly = require('../index').crawlstream
process.crawly.delay = 50

fs.createReadStream('./file.txt').pipe(process.crawly)
