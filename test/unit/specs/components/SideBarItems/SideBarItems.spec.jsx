import React from 'react';
import { render, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import fakeEvent from 'unitTest/resource/fakeEvent';
import SideBarItems from 'components/SideBarItems/SideBarItems';
import routerMap from 'routes/routerMap';
import style from 'components/SideBarItems/SideBarItems.scss';

describe('components SideBarItems', () => {
  it('should correct hight light', () => {
    Object.keys(routerMap).forEach((key) => {
      const enzymeWrapper = render(
        <MemoryRouter initialEntries={[key]}>
          <SideBarItems />
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
        <SideBarItems />
      </MemoryRouter>,
    );
    let item = enzymeWrapper.find(`.${style.wrapper} a[href="/"]`);

    expect(item.prop('class')).toContain(style['item--active']);

    enzymeWrapper = render(
      <MemoryRouter initialEntries={['/something']}>
        <SideBarItems />
      </MemoryRouter>,
    );
    item = enzymeWrapper.find(`.${style.wrapper} a[href="/"]`);
    expect(item.prop('class')).not.toContain(style['item--active']);
  });

  it('should handleItemClick call when click or touchend', () => {
    const enzymeWrapper = shallow(
      <MemoryRouter initialEntries={['/']}>
        <SideBarItems />
      </MemoryRouter>,
    );

    const SideBarItemsWrapper = enzymeWrapper.find('SideBarItems').shallow();
    spyOn(SideBarItems.prototype, 'handleItemClick');
    const Links = SideBarItemsWrapper.find('NavLink');
    Links.forEach((Link) => {
      Link.simulate('touchend', fakeEvent);
      Link.simulate('click', fakeEvent);
    });
    expect(SideBarItems.prototype.handleItemClick.calls.count()).toEqual(Links.length * 2);
  });
});
