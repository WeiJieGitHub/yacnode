import { type } from 'utils/utils';
import { PAGE_LIMIT } from 'utils/request';

const hasNext = (len, limit = PAGE_LIMIT) => limit >= len;

export default (currentPage, currentTopicsCount) => {
  const page = type(currentPage) !== 'number' ? parseInt(currentPage, 10) : currentPage;

  switch (true) {
    case page === 1 && hasNext(currentTopicsCount):
      return {
        next: 2,
        prev: NaN,
        current: 1,
      };
    case page === 1 && !hasNext(currentTopicsCount):
      return {
        next: NaN,
        prev: NaN,
        current: 1,
      };
    case page > 1 && hasNext(currentTopicsCount):
      return {
        next: page + 1,
        prev: page - 1,
        current: page,
      };
    case page > 1 && !hasNext(currentTopicsCount):
      return {
        next: NaN,
        prev: page - 1,
        current: page,
      };
    default:
      return {
        next: 2,
        prev: NaN,
        current: 1,
      };
  }
};
