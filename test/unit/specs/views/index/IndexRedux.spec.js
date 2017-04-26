import React from 'react';
import indexReducer from 'views/IndexRedux'

describe('views IndexRedux', () => {
  it('should return inital state', () => {
    expect(indexReducer(undefined, {})).toEqual({
      title: 'CNode',
    })
  });
});
