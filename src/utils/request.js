import { stringify } from 'querystring';
import 'whatwg-fetch';

const API_PREFIX = 'https://cnodejs.org/api/v1';
export const PAGE_LIMIT = 6;

export const getHomeTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ limit: PAGE_LIMIT }, params))}`);
export const getGoodTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ tab: 'good', limit: PAGE_LIMIT }, params))}`);
export const getAskTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ tab: 'ask', limit: PAGE_LIMIT }, params))}`);
export const getJobTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ tab: 'job', limit: PAGE_LIMIT }, params))}`);
export const getShareTopics = params => fetch(`${API_PREFIX}/topics/?${stringify(Object.assign({ tab: 'share', limit: PAGE_LIMIT }, params))}`);
