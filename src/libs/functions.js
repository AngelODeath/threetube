const fs = require('fs');

function ls(dir, callb) {
	if (typeof dir == 'undefined') dir = './'

	fs.readdir(dir, (err, files) => {
		if (err) throw err

		files.forEach(callb)
	});
}

export {ls}
