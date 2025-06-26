/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php
Module\Http\Router::get('/send', function () {
return $this->json(array("success" => Mail::send(array("body" => Module::template('signup-confirmation')->compile(array("base_url" => AppConfig::get("retrieve.email.url"))), "subject" => "Sign-up confirmation", "to" => $model->email, "from" => "somebody@example.com"))));
}
);
