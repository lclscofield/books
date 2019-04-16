const { getHtml } = require('../common')
const { getSearchData } = require('../service')

module.exports = {
  async index() {
    return {
      path: 'index'
    }
  },
  async search(ctx) {
    const query = ctx.query
    const url = `https://sou.xanbhx.com/search?siteid=qula&q=${query.val}`
    const data = await getSearchData(
      await getHtml({
        url: encodeURI(url)
      })
    )
    return {
      path: 'search',
      data
    }
  }
}
