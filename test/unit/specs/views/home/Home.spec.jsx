import React from 'react';
import { shallow } from 'enzyme';
import { Home } from 'views/home/Home';

describe('views Home', () => {
  it('should show content', () => {
    const store = {
      title: 'home',
    };
    const enzymeWrapper = shallow(<Home store={store} />);
    const h1 = enzymeWrapper.find('h1');
    expect(h1.text()).toContain('home');
  });
});
