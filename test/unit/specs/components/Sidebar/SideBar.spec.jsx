import React from 'react';
import { shallow } from 'enzyme';
import fakeEvent from 'unitTest/resource/fakeEvent';
import SideBar from 'components/SideBar/SideBar';
import styles from 'components/SideBar/SideBar.scss';

describe('components Sidebar', () => {
  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = shallow(
      <SideBar />,
    );
  });

  it('should correct toggle open/close via props', () => {
    const classOpening = `.${styles.opening}`;
    expect(enzymeWrapper.find(classOpening).exists()).toBe(false);
    enzymeWrapper.setProps({ open: true });
    expect(enzymeWrapper.find(classOpening).exists()).toBe(true);
  });

  it('should handleCloseOperation call when click and touchend fire', () => {
    spyOn(SideBar.prototype, 'handleCloseOperation');
    enzymeWrapper.find(`.${styles.cross}`).simulate('click', fakeEvent);
    expect(SideBar.prototype.handleCloseOperation).toHaveBeenCalledWith(fakeEvent);
    enzymeWrapper.find(`.${styles.cross}`).simulate('touchend', fakeEvent);
    expect(SideBar.prototype.handleCloseOperation.calls.count()).toEqual(2);
  });
});
