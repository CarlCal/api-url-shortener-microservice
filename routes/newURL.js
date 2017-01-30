
const express = require("express")
const validate = require("validate.js")

const mongo = require("../db")
const ProperURL = require("./properURL")

const router = express.Router()

function randomPIN() {
	return Math.floor(1000 + Math.random() * 9000)
}

router
	.use(ProperURL)
	.get("/:http//:url", (req, res) => {	
		res.setHeader("content-type", "application/json")

		var url = req.params["http"]+"//"+req.params["url"]
		var valid = validate({website: url}, 
												 {website: {url: true}})

		var obj = {
			original_url: url,
			short_code: randomPIN()
		}

		//simply gerenate a 4 number code thats in an object w
		//with the orignial url

		//whn someone yype in hte shorter code it 
		//redirects you to the original url
	})

module.exports = router