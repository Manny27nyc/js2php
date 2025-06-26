/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
class Page {
  constructor(title, body) {
    this.title = title
    this.body = body
  }

  getDescription() {
    return `${this.title}: ${this.body}`
  }
}
class Article extends Page {
  constructor(title, body, author) {
    super(title, body)
    this.author = author
  }

  getDescription() {
    let descrition = parent.getDescription()
    return `${description} by ${this.author}`
  }
}

var article = new Article("Wonderful article", "Yada Yada Yada", "Bob Loblaw");
var_dump(article.getDescription());
