import React from 'react';
import { shallow } from 'enzyme';
import Job from 'views/job/Job';

describe('views Job', () => {
  it('should show content', () => {
    const enzymeWrapper = shallow(<Job />);
    const h1 = enzymeWrapper.find('h1');
    expect(h1.text()).toContain('Job');
  });
});
