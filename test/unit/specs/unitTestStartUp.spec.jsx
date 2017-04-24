import React from 'react';
import { shallow } from 'enzyme';
import TestComponent from '../resource/TestComponent';
import style from '../resource/TestComponent.scss';

describe('start up', () => {
  it('should be start up', () => {
    expect(true).toBe(true);
  });

  it('can test jsx', () => {
    const testComponent = shallow(<TestComponent />);
    const h1 = testComponent.find('h1');
    expect(h1.text()).toEqual('Hello World');
  });

  it('can import style', () => {
    expect(style).toBeDefined();
  });
});
