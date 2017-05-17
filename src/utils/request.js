import { stringify } from 'querystring';
import 'whatwg-fetch';

const API_PREFIX = 'https://cnodejs.org/api/v1';

export const getHomeTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(params)}`);
export const getGoodTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ tab: 'good' }, params))}`);
export const getAskTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ tab: 'ask' }, params))}`);
export const getJobTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ tab: 'job' }, params))}`);
export const getShareTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ tab: 'share' }, params))}`);
