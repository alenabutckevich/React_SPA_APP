import React from 'react';
import Footer from './';
import style from './footer.scss';

describe('<Footer/>', () => {
  it('render footer', () => {
    const wrapper = shallow(
      <Footer />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
