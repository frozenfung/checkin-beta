import React from 'react';
import { shallow } from 'enzyme';

import SmartApp from '../../src/containers/SmartApp';
import SmartNavBar from '../../src/containers/SmartNavBar';
import Snackbar from 'material-ui/Snackbar';

describe('<SmartApp />', () => {
  const WrappedComponent = SmartApp.WrappedComponent;

  it('render SmartNavBar component', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.find(SmartNavBar)).toHaveLength(1);
  });

  it('render Snack component', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.find(Snackbar)).toHaveLength(1);
  });
});
