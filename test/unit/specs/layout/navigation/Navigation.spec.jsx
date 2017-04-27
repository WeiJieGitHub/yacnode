import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Navigation from 'layouts/navigation/Navigation';
import style from 'layouts/navigation/Navigation.scss';

describe('layout Navigation', () => {
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
          <Navigation />
        </MemoryRouter>,
      );
      const item = enzymeWrapper.find(`a[href="${key}"]`);
      expect(item.hasClass(style.active)).toBe(true);
      expect(item.text()).toContain(value);
    });
  });

  it('root path must be exact', () => {
    const enzymeWrapper = shallow(<Navigation />);
    const item = enzymeWrapper.find('NavLink[to="/"]');
    expect(item.prop('exact')).toBe(true);
  });
});
