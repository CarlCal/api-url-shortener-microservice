
const express = require("express")

const router = express.Router()

const indexAsset = __dirname + "/../public"

router
	.use(express.static(indexAsset))

module.exports = router