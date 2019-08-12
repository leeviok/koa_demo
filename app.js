const Koa = require('koa')
const InitManager = require('./core/init')

const app = new Koa()

InitManager.initCore(app)

process.cwd()

// app.use(classic.routes())
// app.use(book.routes())

app.listen(8888)