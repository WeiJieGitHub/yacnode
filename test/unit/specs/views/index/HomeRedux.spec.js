import homeReducer from 'views/home/HomeRedux';

describe('views HomeRedux', () => {
  it('should return inital state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      title: 'home',
    });
  });
});
