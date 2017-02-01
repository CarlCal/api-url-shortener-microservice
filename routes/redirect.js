
const express = require("express")

const mongo = require("../db")

const router = express.Router()

router
	.route("/:key([^/]+)")
	.get((req, res) => {
		mongo.db.collection("urls")
			.findOne({ url_hash: req.params["key"] }, (err, item) => {
									if (err) throw err

									if(!item) {
										res.json({ error: "Can't find the corresponding url in the database" }).end()
									}	else {
										res.redirect(item["original_url"])
									}
								})
	})

module.exports = router
