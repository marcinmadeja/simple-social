import { API_URL } from 'constants/env';
import * as apiUtils from './utils';

const request = (endpoint) => {
  const url = `${API_URL}${endpoint}`;
  return apiUtils.request({ url });
};

export const getPosts = async () => {
  const response = await request('posts');
  return response.data;
};
