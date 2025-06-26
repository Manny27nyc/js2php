/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php
class Page
{
public function read($name = "Page") {
echo("{$name} read.
");
}

}
class Article extends Page
{
public function read($name = "Article") {
parent::read($name);
}

}
$article = new Article();
echo($article->read());
