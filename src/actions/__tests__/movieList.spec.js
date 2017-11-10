import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMoviesByTitle, fetchMovieByDirector } from '../movieList';
import * as types from '../../constants';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(Axios);

describe('movie actions', () => {
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = '075cd6ced4baf51f5a02259700965b5d';
    const error = 'Error: Request failed with status code 500';
    const query = 'query';

    afterEach(() => {
        mock.reset();
    });

    it('creates FETCH_MOVIES_BY_TITLE_SUCCESS when fetching movies has been done', () => {

        mock
            .onGet(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`).reply(200, {
                results: [{ id: 1, title: 'movie1' }, { id: 2, title: 'movie2' }]
            });

        const expectedActions = [
            { "type": types.START_FETCHING_MOVIES_BY_TITLE },
            {
                "type": types.FETCH_MOVIES_BY_TITLE_SUCCESS, payload: [{ id: 1, title: 'movie1' },
                { id: 2, title: 'movie2' }]
            },
        ];
        const store = mockStore({ movies: [] });

        return store.dispatch(fetchMoviesByTitle(query)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates FETCH_MOVIES_BY_TITLE_FAILURE when fetching movies has been done', () => {
        mock
            .onGet(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`).
            replyOnce(500, { error: error });

        const expectedActions = [
            { "type": types.START_FETCHING_MOVIES_BY_TITLE },
            { "type": types.FETCH_MOVIES_BY_TITLE_FAILURE, payload: { error: error } },
        ];
        const store = mockStore({ error: null });

        return store.dispatch(fetchMoviesByTitle('query')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates FETCH_MOVIES_BY_DIRECTOR_SUCCESS when fetching movies has been done', () => {
        const name = 'director';
        const id = 1;

        mock
            .onGet(`${baseUrl}/search/person?api_key=${apiKey}&query=${name}`).reply(200, {
                results: [{ id: 1, name: 'director' }]
            });
        mock
            .onGet(`${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}`).reply(200, {
                crew: [{ id: 1, title: 'movie1', department: 'Directing' }, { id: 2, title: 'movie2', department: 'Directing' },
                { id: 3, title: 'movie3' }]
            });

        const expectedActions = [
            { "type": types.START_FETCHING_MOVIES_BY_TITLE },
            {
                "type": types.FETCH_MOVIES_BY_TITLE_SUCCESS, payload: [{ id: 1, title: 'movie1', department: 'Directing' },
                { id: 2, title: 'movie2', department: 'Directing' }]
            },
        ];
        const store = mockStore({ movies: [] });

        return store.dispatch(fetchMovieByDirector(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

});