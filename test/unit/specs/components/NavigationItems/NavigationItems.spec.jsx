import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import NavigationItems from 'components/NavigationItems/NavigationItems';
import routerMap from 'routes/routerMap';
import style from 'components/NavigationItems/NavigationItems.scss';

describe('components NavigationItems', () => {
  it('should correct hight light', () => {
    Object.keys(routerMap).forEach((key) => {
      const enzymeWrapper = render(
        <MemoryRouter initialEntries={[key]}>
          <NavigationItems />
        </MemoryRouter>,
      );
      const item = enzymeWrapper.find(`a[href="${key}"]`);
      expect(item.hasClass(style['item--active'])).toBe(true);
      expect(item.text()).toContain(routerMap[key].title);
    });
  });

  it('root path must be exact', () => {
    let enzymeWrapper = render(
      <MemoryRouter initialEntries={['/']}>
        <NavigationItems />
      </MemoryRouter>,
    );
    let item = enzymeWrapper.find(`.${style.wrapper} a[href="/"]`);

    expect(item.prop('class')).toContain(style['item--active']);

    enzymeWrapper = render(
      <MemoryRouter initialEntries={['/something']}>
        <NavigationItems />
      </MemoryRouter>,
    );
    item = enzymeWrapper.find(`.${style.wrapper} a[href="/"]`);
    expect(item.prop('class')).not.toContain(style['item--active']);
  });
});
