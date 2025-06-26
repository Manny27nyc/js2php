/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
class ClassExample {

  constructor(something) {
    this._something = something
  }

  toArray(model, array) {
    return array;
  }

  hello() {
    return "Hello world";
  }

  get something() {
    return "Something: " + this._something;
  }

  set something(value) {
    this._something = value + 10;
  }

  creating(model) {
    Mail.send({
      body: Module.template('signup-confirmation').compile({
        base_url: AppConfig.get("retrieve.email.url")
      }),
      subject: "Sign-up confirmation",
      to: model.email,
      from: "somebody@example.com"
    });
  }

  updating(model) {
    if (model.isDirty('status') && model.status == 1) {

      Mail.send({
        body: Module.template('signup-approved').compile({
          BASE_URL: AppConfig.get("retrieve.email.url")
        }),
        subject: "Approved!",
        to: model.email,
        from: "somebody@example.com"
      });

    }
  }

}

// Instantiate class and call getter method
example = new ClassExample("awesome");
var_dump(example.hello.apply());
var_dump(example.hello());
