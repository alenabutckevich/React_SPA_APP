import React from 'react';
import toJson from 'enzyme-to-json';
import MovieAnnotation from './';
import { BASE_CLASS } from './constants';

const setup = propOverrides => {
    const { runtime, genres } = propOverrides;
    const props = Object.assign({
        movie: {
            poster_path: 'path',
            title: 'title',
            vote_average: '9.9',
            genres: genres,
            release_date: '12-12-2012',
            runtime: runtime,
            overview: 'overview'
        },
        cast: 'cast',
        director: 'director',
    }, propOverrides)

    const wrapper = shallow(<MovieAnnotation {...props} />)

    return {
        props,
        wrapper
    }
}

describe('<MovieAnnotation/>', () => {
    const testMovieAnnotationRender = (runtime, genres) => {
        it('render movie annotation', () => {
            const { wrapper } = setup({ runtime: runtime, genres: genres });

            expect(wrapper.find(`.${BASE_CLASS}__image`).prop('src')).toEqual('https://image.tmdb.org/t/p/w500/path');
            expect(wrapper.find(`.${BASE_CLASS}__title`).text()).toEqual('title');
            expect(wrapper.find(`.${BASE_CLASS}__rating`).text()).toEqual('9.9');
            expect(wrapper.find(`.${BASE_CLASS}__genre`).text()).toEqual(genres.length ? 'genre1' : '');
            expect(wrapper.find(`.${BASE_CLASS}__release-date`).text()).toEqual('2012');
            expect(wrapper.find(`.${BASE_CLASS}__duration`).text()).toEqual(`${runtime || 0} min`);
            expect(wrapper.find(`.${BASE_CLASS}__description`).text()).toEqual('overview');
            expect(wrapper.find(`.${BASE_CLASS}__director`).text()).toEqual('Director: director');
            expect(wrapper.find(`.${BASE_CLASS}__cast`).text()).toEqual('Cast: cast');

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    }

    testMovieAnnotationRender('100', [{id: 1, name: 'genre1'}]);
    testMovieAnnotationRender('', []);
})
