
const express = require("express")
const Hashids = require("hashids")
const validate = require("validate.js")

const router = express.Router()

var mongo = require("../db")

function randomInt() {
	return Math.floor(1 + Math.random() * 10)
}

router
	.get("*", (req, res) => {	

		var url = req.params[0].substr(1)
		var valid = validate( {website: url}, {
														website: {
															url: {
																allowLocal: true
															}
														}
													})

		var obj = {
			original_url: "",
			url_hash: ""
		}
		
		if (valid) {
			res.json({ error: "You need to enter a real site, with a proper protocol" }).end()
		} else {
			obj.original_url = url

			var hashids = new Hashids(url)
			obj.url_hash = hashids.encode(randomInt(), randomInt(), randomInt()) 

			mongo.db.collection("urls")
				.insert(obj, (err, result) => {
					if (err) throw err
					
					if(!result) {
						res.json({ error: "Could't add that url to the database" })
					} else {
						res.json({ original_url: obj.original_url, short_url: "https://carl-cal-url-shortener-ms.herokuapp.com/"+obj.url_hash})
					}
				})		
		}
	})

module.exports = router
