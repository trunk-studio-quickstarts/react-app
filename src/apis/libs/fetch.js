import QS from 'query-string';
import {oaKaryRoute} from './route';
import { pipeAsync } from '../../utils/functional';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const getUrl = ({route, query, ...params}) => ({
  ...params,
  url: query
    ? `${route}?${queryString.stringify(query)}`
    : route
});

const getBody = ({payload, ...params}) => ({
  ...params,
  body: JSON.stringify(payload)
});

const withToken = ({idToken, ...params}) => ({
  ...params,
  headers: {Authorization: idToken},
  retry: true
});

const defaultFetch = async (payload) => {
  const { method, url, headers = {}, body } = payload;
  try {
    const res = await fetch(url, {
      method,
      headers: {...defaultHeaders, ...headers},
      mode: 'cors',
      cache: 'default',
      body
    });

    const { status: statusCode, ok } = res;
    
    const resultText = await res.text();
    const result = resultText === ''
      ? {} 
      : JSON.parse(resultText);


    return {
      statusCode,
      ok,
      result
    };
  } catch (error) {
    console.log(method, url, 'api error: ', error);
    return await retryFetch(payload, error);
  }
};

export const fetchGet = async (route, query) => await pipeAsync(
  getUrl,
  defaultFetch
)({route, query, method: 'GET'});

export const fetchGetWithToken = async (route, idToken, query) => await pipeAsync(
  getUrl,
  withToken,
  defaultFetch
)({route, idToken, query, method: 'GET'});

export const fetchPost = async (url, payload) => await pipeAsync(
  getBody,
  defaultFetch
)({url, payload, method: 'POST'});

export const fetchPostWithToken = async (url, idToken, payload) => await pipeAsync(
  getBody,
  withToken,
  defaultFetch
)({url, idToken, payload, method: 'POST'});

export const fetchPut = async (url, payload) => await pipeAsync(
  getBody,
  defaultFetch
)({url, payload, method: 'PUT'});

export const fetchPutWithToken = async (url, idToken, payload) => await pipeAsync(
  getBody,
  withToken,
  defaultFetch
)({url, idToken, payload, method: 'PUT'});