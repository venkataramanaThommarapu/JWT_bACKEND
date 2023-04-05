var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')



router.post("/", function (req, res, next) {
  const body = req.body;

  if (body.email === "admin@gmail.com" && body.password === "Password@123") {
    const token = jwt.sign({ role: "administrator" }, "secret");
    res.send({ token: token });
  } else if (body.email == "guest" && body.password == "Password@123") {
    const token = jwt.sign({ role: "guest" }, "secret");

    res.send({ token: token });

   
  } else {
    res.status(422).send({ message: "unauthorized user" });
  }
});



module.exports = router;