import React from 'react';
import { shallow } from 'enzyme';
import Header from 'layouts/header/Header';

describe('layout Header', () => {
  it('should show title', () => {
    const enzymeWrapper = shallow(<Header />);
    const h1 = enzymeWrapper.find('h1');
    expect(h1.text()).toContain('CNode');
  });
});
