import React from 'react';
import Header from './';

describe('<Header/>', () => {
  it('render header', () => {
    const wrapper = shallow(
      <Header />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
