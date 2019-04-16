module.exports = {
  async getSearchData($) {
    const title = $('.search-list h2')
      .text()
      .trim()

    let bookList = []
    $('.search-list ul li').each(function(idx) {
      if (idx === 0) return
      let list = []
      $(this)
        .children('span')
        .each(function(idx2) {
          const e = $(this)
          if (idx2 === 1) {
            list.push({
              val: e.text().trim(),
              href: e.children('a').attr('href')
            })
          } else {
            list.push(e.text().trim())
          }
        })
      bookList.push(list)
    })
    return {
      title,
      bookList
    }
  }
}
