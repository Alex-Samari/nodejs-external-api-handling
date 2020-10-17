import { getApiPingRoute, getPostsRoute, getBlogPostByTagRoute } from './blog-posts';

export const routes = [
	getApiPingRoute,
	getPostsRoute,
	getBlogPostByTagRoute
]