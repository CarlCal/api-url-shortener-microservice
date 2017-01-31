
const MongoClient = require("mongodb").MongoClient

var localURL = "mongodb://localhost:27017/shorter-url" // Delete when done

var mLab = process.env.MONGOLAB_URI

MongoClient.connect(mLab, (err, connection) => {
	if (err) { console.log(err) }
	module.exports.db = connection
})