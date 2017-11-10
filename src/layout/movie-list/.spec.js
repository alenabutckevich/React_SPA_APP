import React from 'react';
import toJson from 'enzyme-to-json';
import MovieList from './movie-list';
import Movie from './movie';

const setup = propOverrides => {
    const { movies } = propOverrides;
    const props = Object.assign({
        movies: movies,
        genres: [{
            id:1, name:'genre1'
        }, {
            id:2, name:'genre2'
        }]
    }, propOverrides);

    const wrapper = shallow(<MovieList {...props}/>);

    return {
        wrapper,
        props
    }
}

describe('<MovieList />', () => {

    it('render movie list', () => {
        const movies = [{
            id:1, title:'title1', poster_path:'path1', genre_ids:[1], release_date:'2012-12-12'
        }, {
            id:2, title:'title2', poster_path:'path2', genre_ids:[2], release_date:'2012-12-12'
        }];
        const { wrapper } = setup({movies: movies});

        expect(wrapper.find('Movie')).toHaveLength(2);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('render empty movie list', () => {
        const { wrapper } = setup([]);

        expect(wrapper.find('Movie')).toHaveLength(0);
        expect(wrapper.find('.movie-list_empty').text()).toEqual('No films found');
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})