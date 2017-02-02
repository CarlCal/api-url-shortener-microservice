
const MongoClient = require("mongodb").MongoClient

MongoClient.connect(process.env.MONGOLAB_URI, (err, connection) => {
	if (err) { console.log(err) }
	module.exports.db = connection
})