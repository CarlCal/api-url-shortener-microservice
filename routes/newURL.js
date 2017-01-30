
const express = require("express")
const validate = require("validate.js")

const mongo = require("../db")

const router = express.Router()

function randomPIN() {
	return Math.floor(1000 + Math.random() * 9000)
}

router
	.get("*", (req, res) => {	
		res.setHeader("content-type", "application/json")

		var url = req.params[0].substr(1)
		var valid = validate({website: url}, 
												 {website: {url: true}})

		var obj = {
			original_url: url,
			short_url_code: randomPIN()
		}

		if (valid !== undefined) {
			res.send(valid["website"][0])
		} else {
			res.send(obj)
		}

		//simply gerenate a 4 number code thats in an object
		//with the orignial url

		//fi the code already exist, just display it

		//whn someone yype in hte shorter code it 
		//redirects you to the original url
	})

module.exports = router