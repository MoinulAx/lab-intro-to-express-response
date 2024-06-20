const express = require("express");
const app = express();

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
  res.send("Hello World");
});

const quotesRouter = require("./routes/quotes")
app.use("/quotes", quotesRouter)

const magic8Router = require("./routes/magic8")
app.use("/magic8", magic8Router)


app.listen(3003);