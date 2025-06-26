/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
class Page {
  read(name = "Page") {
    echo(`${name} read.\n`);
  }
}

class Article extends Page {
  read(name = "Article") {
    super.read(name);
  }
}

var article = new Article()
echo (article.read())
