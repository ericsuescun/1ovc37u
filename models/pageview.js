const mongoose = require('mongoose');

const PageViewSchema = mongoose.Schema({
	path: String,
	date: Date,
	userAgent: String
});

module.exports = mongoose.model("pageView", PageViewSchema)