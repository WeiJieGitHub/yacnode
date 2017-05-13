import React from 'react';
import { shallow } from 'enzyme';
import Header from 'layouts/Header';

describe('layout Header', () => {
  it('should show title', () => {
    const enzymeWrapper = shallow(<Header />);
    const Navigation = enzymeWrapper.find('Navigation');
    expect(Navigation.exists()).toBe(true);
  });
});
