import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

import {ls} from './libs/functions';

function main() {
	ls('.', filen => {
		console.log('File:', filen)
	})
}

polka().use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
).listen(PORT, err => {
	if (err) throw err
	
	main()
})