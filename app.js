const Koa = require('koa')
const InitManager = require('./core/init')
const parser = require('koa-bodyparser')
const catchError = require('./middleware/exception')

const app = new Koa()

require('./app/models/user')

app.use(parser())
app.use(catchError)

InitManager.initCore(app)

process.cwd()

// app.use(classic.routes())
// app.use(book.routes())

app.listen(8888)