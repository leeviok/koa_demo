const Router = require('koa-router')
const router = new Router()

router.get('/v1/classic/latest', (ctx) => {
  ctx.body = { key: 'classssssic' }
})

module.exports = router