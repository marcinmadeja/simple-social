import { REACT_APP_MTG_API_URL } from 'constants/env';
import * as apiUtils from './utils';

const request = (endpoint) => {
  const url = `${REACT_APP_MTG_API_URL}${endpoint}`;
  return apiUtils.request({ url });
};

export const getCards = async () => {
  const response = await request('cards');
  return response.data.cards;
};
