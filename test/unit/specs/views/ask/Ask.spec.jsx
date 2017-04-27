import React from 'react';
import { shallow } from 'enzyme';
import Ask from 'views/ask/Ask';

describe('views Ask', () => {
  it('should show content', () => {
    const enzymeWrapper = shallow(<Ask />);
    const h1 = enzymeWrapper.find('h1');
    expect(h1.text()).toContain('Ask');
  });
});
