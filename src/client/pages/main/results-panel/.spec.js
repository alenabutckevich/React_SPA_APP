import React from 'react';
import toJson from 'enzyme-to-json';
import ResultsPanel from './results-panel';

const setup = propOverrides => {
    const { movies } = propOverrides;
    const props = Object.assign({
        movies: movies
    }, propOverrides);

    const wrapper = shallow(<ResultsPanel {...props}/>);

    return {
        wrapper,
        props
    }
}

describe('<ResultsPanel />', () => {

    it('render results panel', () => {
        const movies = [{
            id:1, title:'title1', poster_path:'path1', genre_ids:[1], release_date:'2012-12-12'
        }, {
            id:2, title:'title2', poster_path:'path2', genre_ids:[2], release_date:'2012-12-12'
        }];
        const { wrapper } = setup({movies: movies});
        expect(wrapper.find('.results_panel__movies_count').text()).toEqual('2 movies found');

        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('no render results panel', () => {
        const { wrapper } = setup([]);
        expect(wrapper.find('.results_panel__movies_count')).toHaveLength(0);

        expect(toJson(wrapper)).toMatchSnapshot();
    })
})