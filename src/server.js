import Hapi from '@hapi/hapi'
import { routes } from './routes'

// Start function sets the server information and routing
const start = async () => {
	const server = Hapi.server({
		port: process.env.PORT || 8000,
		host: 'localhost'
	})

	routes.forEach(route => {
		server.route(route);
	});

	await server.start();
	console.log(`Server is listening on ${server.info.uri}`);
}

// Handle otherwise Unhandled Rejections globally
process.on('unhandledRejection', err => {
	console.log(err);
	process.exit(1);
})

start();