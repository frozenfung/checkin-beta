import React, { Component  } from 'react';
import { shallow } from 'enzyme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Tabs, Tab  } from 'material-ui/Tabs';

import SmartAccountDialog from '../../src/containers/SmartAccountDialog';

describe('<SmartAccountDialog />', () => {
  const WrappedComponent = SmartAccountDialog.WrappedComponent;

  it('render Dialog component', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.find(Dialog)).toHaveLength(1);
  });

  it('render Tabs component', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.find(Tabs)).toHaveLength(1);
  });

  it('render Tab component', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.find(Tab)).toHaveLength(2);
  });

  it('render TextField component', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper.find(TextField)).toHaveLength(6);
  });
});
