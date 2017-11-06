import React from 'react';
import toJson from 'enzyme-to-json';
import MovieDetails from './movie-details';

const setup = propOverrides => {
    const props = Object.assign({
        director: 'director name'
    }, propOverrides);

    const wrapper = shallow(<MovieDetails {...props}/>);

    return {
        wrapper,
        props
    }
}

describe('<MovieDetails />', () => {

    it('render movie details', () => {
        const { wrapper } = setup();
        const panel = shallow(wrapper.props().panel);

        expect(panel.find('.director-panel').text()).toEqual('Films by director name');
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})