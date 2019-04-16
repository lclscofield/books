const handlers = require('./handlers')

// 路由分发
const handle = {
  '/': handlers.index,
  '/search': handlers.search
}

async function route(ctx) {
  const req = ctx.request
  const pathName = req.path
  console.log(pathName)
  if (typeof handle[pathName] === 'function') {
    const tem = await handle[pathName](ctx)
    await ctx.render(tem.path, tem.data)
  }
}

module.exports = async function(ctx, next) {
  await route(ctx)
  await next()
}
