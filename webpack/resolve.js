const path = require('path');

module.exports = {
	modules: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules')],
	extensions: ['.js'],
};
