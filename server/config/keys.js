//keys splitter

if (process.env.NODE_ENV === 'production'){
	//on production server, return prod keys
	module.exports = require('./prod');
} else {
	//on dev server, returns dev keys
	module.exports = require('./dev');
}