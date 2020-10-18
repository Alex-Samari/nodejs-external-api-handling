import Boom from '@hapi/boom';
import Joi from '@hapi/joi';

const Wreck = require('@hapi/wreck');

// Get Api Ping Route
export const getApiPingRoute = {
	method: 'GET',
	path: '/api/ping',
	handler: (req, h) => {
		return h.response({ "success": true }).code(200);
	}
}

/**
 * Get Posts Route
 * This route can receive 3 query parameters named "tags", "sortBy" and "direction"
 */
export const getPostsRoute = {
	method: 'GET',
	path: '/api/posts',
	handler: async (req, h) => {
		/**
		 * API Response holding sorted posts based on query params and without duplicates
		 * The reponse API consists of an Object with a key called "posts" that holds the array of posts as ist value
		 */
		let structuredResponse = null;

		const { tags, sortBy, direction } = req.query;

		// create an array of tags based on the "tags" query parameter passed to the URL
		const tagArr = tags.split(',');

		const externalCallArr = [];

		/**
		 * Create a new external API call for each "tag" query parameter.
		 * We do this because the external API only accepts a single tag paramter for each request
		 */
		for (const tag of tagArr) {
			externalCallArr.push(getBlogPostByTagExternalCall(tag));
		}

		// Concurrently call multiple external API requests based on the number of "tag" parameters
		await Promise.all(externalCallArr)
			.then(function (results) {
				let unsortedPostArr = [];

				for (const result of results) {
					const { res, payload } = result;
					const parsedData = JSON.parse(payload.toString());

					const subsetArrOfPosts = parsedData.posts;

					unsortedPostArr = unsortedPostArr.concat(subsetArrOfPosts);
				}

				// Remove duplicates from the unsorted array based on post "id" 
				unsortedPostArr = unsortedPostArr.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)

				// Sort the array based on "direction" and "sortBy" values  
				if (direction === 'asc') {
					unsortedPostArr = unsortedPostArr.sort((a, b) => (b[sortBy] < a[sortBy]) ? 1 : -1);

				} else {
					unsortedPostArr = unsortedPostArr.sort((a, b) => (b[sortBy] > a[sortBy]) ? 1 : -1);
				}

				// Setting the api response body. Note that "unsortedPostArr" is sorted at this point
				structuredResponse = {
					"posts": unsortedPostArr
				}

			}).catch((err) => {
				Boom.badImplementation('External API Error');
			})


		return h.response(structuredResponse).code(200);
	},
	options: {
		validate: {
			query: Joi.object({
				tags: Joi.string().min(1).required(),
				direction: Joi.string().valid('asc', 'desc').default('asc'),
				sortBy: Joi.string().valid('id', 'reads', 'likes', 'popularity').default('id'),
			})
		}
	}
}

/**
 * 
 * @param {string} tag 
 * function sends an external api call to fetch the blog posts using a single 'tag' query parameter
 */
const getBlogPostByTagExternalCall = async function (tag) {
	return await Wreck.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`);
};
