const request = require('request')
const cheerio = require('cheerio')

async function getHtml(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const $ = cheerio.load(body, { decodeEntities: false })
        resolve($)
      } else {
        reject(err || '请求错误')
      }
    })
  })
}

module.exports = {
  getHtml
}
