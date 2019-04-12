// 路由分发
function route(ctx) {
  const req = ctx.request
  console.log(req.path)
}

module.exports = async function(ctx, next) {
  route(ctx)
  await next()
}
