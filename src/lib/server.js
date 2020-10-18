'use strict';

import Hapi from '@hapi/hapi';
import { routes } from './routes/index';
import Boom from '@hapi/boom';

const server = Hapi.server({
	port: process.env.PORT || 3000,
	host: 'localhost'
})

// Start function sets the server information and routing
exports.init = async () => {

	routes.forEach(route => {
		server.route(route);
	});

	await server.initialize();
	return server;
}

exports.start = async () => {

	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
	return server;
};

// Handle otherwise Unhandled Rejections globally
process.on('unhandledRejection', err => {
	Boom.boomify(err, { statusCode: 500 });
	process.exit(1);
})