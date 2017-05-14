import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'reduxConf/configureStore';
import Frame from 'layouts/Frame/Frame';

const routerMap = {
  '/': 'home',
  '/good': 'good',
  '/share': 'share',
  '/ask': 'ask',
  '/job': 'job',
};

describe('layout Frame', () => {
  it('should render corrent component through routes', () => {
    Object.keys(routerMap).forEach((key) => {
      const store = configureStore();
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[key]}>
            <Frame />
          </MemoryRouter>
        </Provider>,
      );
      const item = enzymeWrapper.find(`[data-role="${routerMap[key]}"]`);
      expect(item.exists()).toBe(true);
    });
  });
});
