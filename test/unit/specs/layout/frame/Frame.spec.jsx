import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'reduxConf/configureStore';
import Frame from 'layouts/Frame';

describe('layout Frame', () => {
  it('should contain Header', () => {
    const enzymeWrapper = shallow(<Frame />);
    const header = enzymeWrapper.find('Header');
    expect(header).toBeDefined();
  });
  it('should render corrent component through routes', () => {
    const map = new Map([
      ['/', 'home'],
      ['/good', 'good'],
      ['/share', 'share'],
      ['/ask', 'ask'],
      ['/job', 'job'],
    ]);
    map.forEach((value, key) => {
      const store = configureStore();
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[key]}>
            <Frame />
          </MemoryRouter>
        </Provider>,
      );
      const item = enzymeWrapper.find(`[data-role="${value}"]`);
      expect(item.exists()).toBe(true);
    });
  });
});
