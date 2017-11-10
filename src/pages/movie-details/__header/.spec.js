import React from 'react';
import MovieDetailsHeader from './';

describe('<MovieDetailsHeader />', () => {

    it('render movie details header', () => {
        const wrapper = shallow(<MovieDetailsHeader/>);
       
        expect(wrapper).toMatchSnapshot();
    })
})