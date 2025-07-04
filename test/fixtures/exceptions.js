// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
// naked throw
throw new Exception("doh!")

// simple try catch
try {
  echo("hello")
} catch (e) {
  var_dump(e)
}

// try finally block
try {
  throw new Exception("The sky is falling!")
} finally {
  var_dump("All clear")
}
