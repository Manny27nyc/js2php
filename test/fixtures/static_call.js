/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */

Module.Http.Router.get('/send', function() {
  return this.json({
    success: Mail.send({
      body: Module.template('signup-confirmation').compile({
        base_url: AppConfig.get("retrieve.email.url")
      }),
      subject: "Sign-up confirmation",
      to: model.email,
      from: "somebody@example.com"
    })
  })
});
