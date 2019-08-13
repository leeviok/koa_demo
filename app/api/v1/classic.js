const Router = require('koa-router')
const router = new Router()
const { HttpException, ParameterException } = require('../../../core/http-exception')

router.post('/v1/:id/classic/latest', (ctx) => {

  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  
  // console.log(path)
  // console.log(query)
  // console.log(headers)
  // console.log(body)

  if (true) {
    // throw new HttpException('WHY ERROR ?', 10001, 400)
    throw new ParameterException()

    // const error = new Error('ERROR!!!')
    // error.errorCode = 10001
    // error.status = 400
    // error.requestUrl = `${ctx.method} ${ctx.path}`
    // throw error
  }

  ctx.body = { key: 'classssssic' }

  // throw new Error('API ERROR')
})

module.exports = router