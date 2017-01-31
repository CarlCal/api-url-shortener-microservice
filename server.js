
const bodyParser = require("body-parser")
const express = require("express")

const app = express()

var port = process.env.PORT || 3000

var api = require("./routes/api")
var index = require("./routes/index")
var redirect = require("./routes/redirect")

app
	.use(bodyParser.json())
	.use("/", index)
	.use(redirect)
	.use("/new/", api)
	.listen(port)

	//display coreect info
	//send correct error mesaage depending on your fault
