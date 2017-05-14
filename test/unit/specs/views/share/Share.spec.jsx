import React from 'react';
import { shallow } from 'enzyme';
import Share from 'views/Share/Share';

describe('views Share', () => {
  it('should show content', () => {
    const enzymeWrapper = shallow(<Share />);
    const h1 = enzymeWrapper.find('h1');
    expect(h1.text()).toContain('Share');
  });
});
