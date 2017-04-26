import React from 'react';
import { shallow } from 'enzyme';
import { Index } from 'views/Index';

describe('views Index', () => {
  it('should show custom title', () => {
    const store = {
      title: 'CNode',
    };
    const testComponent = shallow(<Index store={store}/>);
    const h1 = testComponent.find('h1');
    expect(h1.text()).toContain('CNode');
  });
});
