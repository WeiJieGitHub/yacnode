import homeReducer from 'views/Home/redux';

describe('views HomeRedux', () => {
  it('should return inital state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      title: 'Home',
    });
  });
});
