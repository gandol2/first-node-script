var cowsay = require("cowsay");
var moment = require("moment");

console.log(moment);

console.log(
  cowsay.say({
    text: "여기는 천안 입니다",
    e: "Xx",
    T: "✅ ",
  })
);

// or cowsay.think()
