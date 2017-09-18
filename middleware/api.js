/*
  eslint
  no-unused-vars: 0
  no-undef: 0
*/

function callApi(endpoint, data = {}) {

  const BASE_URL = 'https://www.reddit.com/r/';
  const { method } = data;

  return fetch(BASE_URL + endpoint)
    .then(response =>
      response.text()
      .then(text => ({ text, response }))
    ).then(({ text, response }) => {
      if (!response.ok) {
        return Promise.reject(text);
      }
      return text
    }).catch(err => console.log(err));
};

export const CALL_API = Symbol('Call API');

export default store => next => action => {
  const callAPI = action[CALL_API];
  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint, types, data } = callAPI;

  const [ requestType, successType, errorType ] = types;

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, data).then(
    response =>
      next({
        response,
        type: successType,
        data
      }),
    error => next({
      error: error.message || 'There was an error.',
      type: errorType
    })
  )
};
