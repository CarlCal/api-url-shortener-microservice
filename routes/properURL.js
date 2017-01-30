
const express = require("express")

const router = express.Router()

router
	.get("/", (req, res) => {
		res.setHeader("content-type", "text/plain")
		res.end("Enter a proper URL") //throw error and have a view connected to that error
	})
	.get("/:http", (req, res) => {
		res.setHeader("content-type", "text/plain")
		res.end("Enter a proper URL") //throw error and have a view connected to that error
	})
	.get("/:http//", (req, res) => {
		res.setHeader("content-type", "text/plain")
		res.end("Enter a proper URL")	//throw error and have a view connected to that error
	})
	.get("/:http/:url", (req, res) => {
		res.setHeader("content-type", "text/plain")
		res.end("Enter a proper URL") //throw error and have a view connected to that error
	})

module.exports = router