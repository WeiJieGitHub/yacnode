import homeReducer from 'views/Home/HomeRedux';

describe('views HomeRedux', () => {
  it('should return inital state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      title: 'Home',
    });
  });
});
