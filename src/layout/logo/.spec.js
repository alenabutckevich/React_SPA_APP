import React from 'react';
import Logo from './';


describe('<Logo/>', () => {
  it('render logo', () => {
    const wrapper = shallow(
      <Logo />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
