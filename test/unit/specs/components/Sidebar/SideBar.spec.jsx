import React from 'react';
import { shallow } from 'enzyme';
import fakeEvent from 'unitTest/resource/fakeEvent';
import SideBar from 'components/SideBar';
import styles from 'components/SideBar/SideBar.scss';

describe('components Sidebar', () => {
  it('should correct toggle open/close', () => {
    const enzymeWrapper = shallow(
      <SideBar open />,
    );
    const classOpening = `.${styles.opening}`;
    expect(enzymeWrapper.find(classOpening).exists()).toBe(true);

    enzymeWrapper.find(`.${styles.cross}`).simulate('click', fakeEvent);
    expect(enzymeWrapper.find(classOpening).exists()).toBe(false);
    enzymeWrapper.instance().open();
    expect(enzymeWrapper.find(classOpening).exists()).toBe(true);
    enzymeWrapper.find(`.${styles.cross}`).simulate('touchEnd', fakeEvent);
    expect(enzymeWrapper.find(classOpening).exists()).toBe(false);
  });
});
