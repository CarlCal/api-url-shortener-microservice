
const express = require("express")
const Hashids = require("hashids")
const validate = require("validate.js")

const mongo = require("../db")

const router = express.Router()

function randomInt() {
	return Math.floor(1 + Math.random() * 10)
}

router
	.get("*", (req, res) => {	

		var url = req.params[0].substr(1)
		var valid = validate({website: url}, 
												 {website: {url: true}})

		var obj = {
			original_url: "",
			url_hash: ""
		}
		
		if (valid !== undefined) {
			res.send(valid["website"][0])
		} else {
			obj.original_url = url

			var hashids = new Hashids(url)
			obj.url_hash = hashids.encode(randomInt(), randomInt(), randomInt()) 
			
			mongo.db.collection("urls")
				.insert(obj, (err, result) => {
					if (err) throw err
						
					res.json(obj)
				})		
		}
	})

module.exports = router
