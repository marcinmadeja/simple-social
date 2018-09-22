import axios from 'axios';

const configureConfig = (url, method, body) => {
  const requestConfig = { url, method };
  if (method === 'get') requestConfig.params = body;
  else requestConfig.data = body;

  return requestConfig;
};

export const request = ({
  url,
  method = 'get',
  body,
}) => {
  return axios({
    ...configureConfig(url, method, body),
  })
    .catch((error) => Promise.reject(error.response));
};

export const generateParamsLink = (params) => {
  return Object.keys(params)
    .map(param => `${param}=${params[param]}`)
    .join('&');
};
