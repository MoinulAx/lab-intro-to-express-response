const express = require("express");
const router = express.Router();

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

router.get("/", (req, res) => {
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  res.render("magic8", { answer: randomResponse });
});

module.exports = router;
