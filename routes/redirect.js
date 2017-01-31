
const express = require("express")

const mongo = require("../db")

const router = express.Router()

router
	.route("/:key([^new]+)")
	.get((req, res) => {
		res.setHeader("content-type", "application/json")
		
		mongo.db.collection("urls")
			.findOne({ url_hash: req.params["key"] }, (err, item) => {
									if (err) throw err

									if(!item)
										res.send(JSON.stringify({ error: "Can't find the corresponding url in the database" }))

									res.redirect(item["original_url"])
								})
	})

module.exports = router
