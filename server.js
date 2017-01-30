
const bodyParser = require("body-parser")
const express = require("express")

const app = express()

var port = process.env.PORT || 3000

const newURL = require("./routes/newURL")
const index = require("./routes/index")

app
	.use(bodyParser.json())
	.use("/new/", newURL)
	.use("/", index)
	.listen(port)