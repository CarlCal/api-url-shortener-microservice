
const express = require("express")
const validate = require("validate.js")

const mongo = require("../db")

const router = express.Router()

function randomPIN() {
	var PIN = Math.floor(1000 + Math.random() * 9000)

	// check if piin already exists

	return PIN
}

router
	.get("/", (req, res) => {
		res.setHeader("content-type", "text/plain")
		res.end("Enter a proper URL") //throw error and have a view connected to that error
	})
	.get("/:url", (req, res) => {
		res.setHeader("content-type", "text/plain")
		res.end("Enter a proper URL")	//throw error and have a view connected to that error
	})
	.get("/:http/:url", (req, res) => {
		res.setHeader("content-type", "text/plain")
		res.end("Enter a proper URL") //throw error and have a view connected to that error
	})
	.get("/:http//:url", (req, res) => {	
		// ??? res.setHeader("content-type", "")

		var url = req.params["http"]+"//"+req.params["url"]
		var valid = validate({website: url}, 
												 {website: {url: true}})

		if (valid !== undefined) {
			res.send = valid["website"][0]
		} else {

			var obj = {
				original_url: url,
				short_code: randomPIN()
			}

			/*mongo.db.collection("urls")
	 			.insert(JSON.stringify(obj), (err, result) => {
	 				if (err) throw Error("Error: "+err)

	 				res.send(result)
	 			})*/

	 		res.send(obj)
		}
	})

module.exports = router