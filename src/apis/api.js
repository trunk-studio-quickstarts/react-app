import {
  oaKaryRoute
} from './libs/route';

import {fetchPost} from './libs/fetch';

//Example
export const getLoginResult = (payload) =>
  fetchPost(oaKaryRoute('login'), payload);