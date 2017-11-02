import React from 'react';
import Footer from './';

it('should render footer correctly', () => {
    const wrapper = shallow(
      <Footer/>
    );
    expect(wrapper).toMatchSnapshot();
});
