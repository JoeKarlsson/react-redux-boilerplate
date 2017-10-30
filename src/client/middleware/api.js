/*
  eslint
  no-unused-vars: 0
  no-undef: 0
*/

function callApi(endpoint, data = {}) {

	const BASE_URL = 'https://www.reddit.com/r/';
	const { method } = data;

	const myHeaders = new Headers({
		'Content-Type': 'text/plain',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, PUT, POST',
	});

	const myInit = {
		method: 'GET',
		headers: myHeaders,
		mode: 'no-cors',
		cache: 'default',
	};

	return fetch(BASE_URL + endpoint)
		.then(response =>
			response.json()
				.then(json => ({ json, response })))
		.then(({ json, response }) => {
			if (!response.ok) {
				return Promise.reject(text);
			}
			return json;
		})
		.catch((err) => {
			throw new Error(err);
		});
}

export const CALL_API = Symbol('Call API');

export default store => next => (action) => {
	const callAPI = action[CALL_API];
	// So the middleware doesn't get applied to every single action
	if (typeof callAPI === 'undefined') {
		return next(action);
	}

	const { endpoint, types, data } = callAPI;
	const [requestType, successType, errorType] = types;

	return callApi(endpoint, data)
		.then(response =>
			next({
				response,
				type: successType,
				data,
			}))
		.catch(error => next({
			error: error.message || 'There was an error.',
			type: errorType,
		}));
};
