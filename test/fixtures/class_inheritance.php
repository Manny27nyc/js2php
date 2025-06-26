/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php
class Page
{
public $title;
public $body;
public function __construct($title, $body) {
$this->title = $title;
$this->body = $body;
}
public function getDescription() {
return "{$this->title}: {$this->body}";
}

}
class Article extends Page
{
public $author;
public function __construct($title, $body, $author) {
parent::__construct($title, $body);
$this->author = $author;
}
public function getDescription() {
$descrition = $parent->getDescription();
return "{$description} by {$this->author}";
}

}
$article = new Article("Wonderful article", "Yada Yada Yada", "Bob Loblaw");
var_dump($article->getDescription());

