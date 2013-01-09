var Stream = require('stream')

exports.log = function (str, delay) {
  out(str, delay)
}

exports.crawlstream = crawlstream = new Stream

crawlstream.writable = true
crawlstream.time = 1
crawlstream.delay = 30
crawlstream.write = function (buf) {
  var str = buf.toString().split('')
  var self = crawlstream
  out(buf.toString(), self.delay)
}
crawlstream.destroy = function () {
  crawlstream.writable = false
}
crawlstream.end = function () {
  crawlstream.destroy()
}

function out (str, delay) {
  str = str.split('')
  var time = 1
  delay = delay || 20
  str.forEach(function (s, k) {
    time += delay
    setTimeout(function () {
      process.stdout.write(s)
      str.length === k + 1 && process.stdout.write('\n')
    }, time)
  })
}
