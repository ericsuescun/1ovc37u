const pageView = require('./models/pageview');

const logger = (req, res, next) => {
	const browser = req.get('User-Agent');
	const url = req.url;
	const date = new Date();
	pageView.create({
		path: url,
		date: date,
		userAgent: browser
	}, (err, data) => {
		if(err) {
			console.error(err);
		} else {
			console.log(data);
		}
	});
	next();
}

module.exports = logger;