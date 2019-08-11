const Koa = require('koa')
const classic = require('./v1/classic')
const book = require('./v1/book')

const app = new Koa()

app.use(classic.routes())
app.use(book.routes())

app.listen(8888)