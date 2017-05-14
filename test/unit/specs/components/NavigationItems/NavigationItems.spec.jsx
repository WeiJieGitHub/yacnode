import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import NavigationItems from 'components/NavigationItems/NavigationItems';
import style from 'components/NavigationItems/NavigationItems.scss';

describe('components NavigationItems', () => {
  it('should correct hight light', () => {
    const map = new Map([
      ['/', '全部'],
      ['/good', '精华'],
      ['/share', '分享'],
      ['/ask', '问答'],
      ['/job', '招聘'],
    ]);
    map.forEach((value, key) => {
      const enzymeWrapper = render(
        <MemoryRouter initialEntries={[key]}>
          <NavigationItems />
        </MemoryRouter>,
      );
      const item = enzymeWrapper.find(`a[href="${key}"]`);
      expect(item.hasClass(style['item--active'])).toBe(true);
      expect(item.text()).toContain(value);
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
