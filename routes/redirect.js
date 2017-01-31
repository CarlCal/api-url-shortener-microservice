
const express = require("express")

const mongo = require("../db")

const router = express.Router()

router
	.route("/:key([^new]+)")
	.get((req, res) => {

		mongo.db.collection("urls")
			.findOne( { url_hash: req.params["key"] }, (err, item) => {
									if (err) throw err
									res.redirect(item["original_url"])
								})
	})

module.exports = router
