
export const getBlogPostByTagRoute = {
	method: 'GET',
	path: '/blog/posts',
	handler: (req, h) => {
		if (req.query.tag) {

			return req.query.tag;
		} else {
			// SHow Error
		}
	}
}

export const getApiPingRoute = {
	method: 'GET',
	path: '/api/ping',
	handler: (req, h) => {
		return h.response({ "success": true }).code(200);
	}
}


export const getPostsRoute = {
	method: 'GET',
	path: '/api/posts',
	handler: (req, h) => {
		const { tags, sortBy, direction } = req.query;

		if (tags) {
			const validSortByOptions = ['id', 'reads', 'likes', 'popularity'];
			const validDirectionOptions = ['asc', 'desc'];


			if (sortBy && !validSortByOptions.find(option => option === sortBy)) {
				// Show Error Here
			}

			if (direction && !validDirectionOptions.find(option => option === direction)) {
				// Show Error Here
			}

			const tagArray = tags.split(',');

			console.log(tagArray)
		}
		else {
			// Show Error Here
		}
		return 'getPostsRoute done';
	}
}