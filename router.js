const handlers = require('./handlers')

// 路由分发
const handle = {
  '/api/home': handlers.home,
  '/api/search': handlers.search
}

async function route(ctx) {
  const req = ctx.request
  const pathName = req.path
  console.log(pathName)
  if (typeof handle[pathName] === 'function') {
    const body = await handle[pathName](ctx)
    ctx.body = body
  }
}

module.exports = async function(ctx, next) {
  await route(ctx)
  await next()
}
