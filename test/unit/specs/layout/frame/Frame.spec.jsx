import React from 'react';
import { shallow } from 'enzyme';
import Frame from 'layouts/frame/Frame';

describe('layout Frame', () => {
  it('should contain Header', () => {
    const enzymeWrapper = shallow(<Frame />);
    const header = enzymeWrapper.find('Header');
    expect(header).toBeDefined();
  });
});
