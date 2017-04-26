import React from 'react';
import { shallow } from 'enzyme';

import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SmartNavBar from '../../src/containers/SmartNavBar';
import SmartAccountDialog from '../../src/containers/SmartAccountDialog';

describe('<SmartNavBar />', () => {
  const WrappedComponent = SmartNavBar.WrappedComponent;

  it('render AppBar component', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });

  it('render SmartAccountDialog component', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.find(SmartAccountDialog)).toHaveLength(1);
  });
});
