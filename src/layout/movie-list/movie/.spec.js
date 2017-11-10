import React from 'react';
import toJson from 'enzyme-to-json';
import Movie from './';

describe('<Movie/>', () => {
    it('should render a movie', () => {
        const wrapper = shallow(
            <Movie id={1} title={'title'} image={'path'} genre={'genre'} releaseDate={'12-12-2012'} key={1} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    }); 
})
