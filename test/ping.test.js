'use strict';

import Lab from '@hapi/lab';
import { expect } from '@hapi/code';
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../lib/server');

describe('GET /api/ping', () => {
	let server;

	beforeEach(async () => {
		server = await init();
	});

	afterEach(async () => {
		await server.stop();
	});

	it('responds with 200', async () => {
		const res = await server.inject({
			method: 'get',
			url: '/api/ping'
		});
		expect(res.statusCode).to.equal(200);
	});

	it('has correct response body', async () => {
		const res = await server.inject({
			method: 'get',
			url: '/api/ping'
		});
		expect(body).to.equal('{"success":"true"}');
	});
});