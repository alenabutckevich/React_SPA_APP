import React from 'react';
import Footer from './';


describe('<Footer/>', () => {
  it('render footer', () => {
    const wrapper = shallow(
      <Footer />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
