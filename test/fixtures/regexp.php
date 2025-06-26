/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php
$one = preg_match('/llo/', "Hello");
var_dump($one);
$two = preg_match_all('/llo/', "Hello");
var_dump($two);
$splitted = explode(",", "one, two, three");
var_dump($splitted);
$splitted = preg_split('/,/', "one, two, three");
var_dump($splitted);
$g_splitted = preg_split('/,/', "one, two, three");
var_dump($g_splitted);
var_dump(str_replace("y", "llo", "hey"));
var_dump(preg_replace('/y/', "llo", "hey", 1));
var_dump(preg_replace('/y/', "llo", "hey hey hey", 1));
var_dump(preg_replace('/y/', "llo", "hey hey hey"));
