import fetch from 'isomorphic-fetch';

function callApi(endpoint, data = {}) {

  const BASE_URL = 'https://www.reddit.com/r/';
  const { method } = data;
  console.log(BASE_URL + endpoint);

  return fetch(BASE_URL + endpoint)
    .then((response) => {
      console.log('hit');
      console.log('response', response);
      return response.text()
        .then((text) => {
          console.log('test', text);
          return ({ text, response });
        })
        .catch(err => console.log(err));
    })
    .then(({ text, response }) => {
      console.log('hit3');
      if (!response.ok) {
        return Promise.reject(text);
      }
      return text;
    })
    .catch(err => console.log(err));

  // return fetch(BASE_URL + endpoint)
  //   .then(response =>
  //     response.text()
  //       .then(text => ({ text, response })),
  //   ).then(({ text, response }) => {
  //     if (!response.ok) {
  //       return Promise.reject(text);
  //     }
  //     return text;
  //   }).catch(err => console.log(err));

  // return fetch(`${BASE_URL}${endpoint}`)
  //   .then(res => res.text())
  //   .then(text => ({ text, response.text() }))
  //   .then(json => dispatch(fetchTodosSuccess(json.body)))
  //   .catch(ex => dispatch(fetchTodosFailure(ex)))
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

  return callApi(endpoint, data).then(
    response =>
      next({
        response,
        type: successType,
        data,
      }),
    error => next({
      error: error.message || 'There was an error.',
      type: errorType,
    }),
  );
};
