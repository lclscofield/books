const { getHtml } = require('../common')
const service = require('../service')

module.exports = {
  async home() {
    const url = encodeURI('https://www.qu.la')
    const data = await service.home(await getHtml({ url }))
    return data
  },
  async search(ctx) {
    const query = ctx.query
    const url = encodeURI(`https://sou.xanbhx.com/search?siteid=qula&q=${query.val}`)
    const data = await service.search(await getHtml({ url }))
    return data
  }
}
