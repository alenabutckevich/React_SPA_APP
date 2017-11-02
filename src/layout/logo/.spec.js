import React from 'react';
import Logo from './';

it('should render logo correctly', () => {
    const wrapper = shallow(
      <Logo/>
    );
    expect(wrapper).toMatchSnapshot();
});
