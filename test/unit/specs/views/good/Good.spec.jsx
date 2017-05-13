import React from 'react';
import { shallow } from 'enzyme';
import Good from 'views/Good';

describe('views Good', () => {
  it('should show content', () => {
    const enzymeWrapper = shallow(<Good />);
    const h1 = enzymeWrapper.find('h1');
    expect(h1.text()).toContain('Good');
  });
});
