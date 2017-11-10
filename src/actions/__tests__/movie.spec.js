import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMovieById, fetchMovieCastAndCrew } from '../movie';
import * as types from '../../constants';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(Axios);

describe('movie actions', () => {
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = '075cd6ced4baf51f5a02259700965b5d';
    const id = 1;
    const error = 'Error: Request failed with status code 500';

    afterEach(() => {
        mock.reset();    
    });

    it('creates FETCH_MOVIE_BY_ID_SUCCESS when fetching movie has been done', () => {
        mock
            .onGet(`${baseUrl}/movie/${id}?api_key=${apiKey}`).reply(200, { id: 1, title: 'movie' });

        const expectedActions = [
            { "type": types.START_FETCHING_MOVIE_BY_ID },
            { "type": types.FETCH_MOVIE_BY_ID_SUCCESS, payload: { id: 1, title: 'movie' }},
        ];
        const store = mockStore({ currentMovie: null });

        return store.dispatch(fetchMovieById(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates FETCH_MOVIE_BY_ID_FAILURE when fetching movie has been done', () => {
        mock
            .onGet(`${baseUrl}/movie/${id}?api_key=${apiKey}`).
                replyOnce(500, { error: error });

        const expectedActions = [
            { "type": types.START_FETCHING_MOVIE_BY_ID },
            { "type": types.FETCH_MOVIE_BY_ID_FAILURE, payload: {error: error} },
        ];
        const store = mockStore({ error: null });

        return store.dispatch(fetchMovieById(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates FETCH_MOVIE_CAST_AND_CREW_SUCCESS when fetching movie cast and crew has been done', () => {
        mock
            .onGet(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`).reply(200, { cast: 'cast', crew: [{id: 1, job: 'Director', name: 'director1'}, 
                {id: 2, job: 'Director', name: 'director2'}] });

        const expectedActions = [
            { "type": types.START_FETCHING_MOVIE_CAST_AND_CREW },
            {
                "type": types.FETCH_MOVIE_CAST_AND_CREW_SUCCESS, payload: {
                    cast: 'cast', crew:
                        [{ id: 1, job: 'Director', name: 'director1' },
                        { id: 2, job: 'Director', name: 'director2' }]
                }
            },
            { "type": types.START_FETCHING_MOVIES_BY_TITLE}
        ];
        const store = mockStore({ currentMovie: null });

        return store.dispatch(fetchMovieCastAndCrew(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates FETCH_MOVIE_CAST_AND_CREW_FAILURE when fetching movie cast and crew has been done', () => {
        mock
            .onGet(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`).
                replyOnce(500, { error: error });

        const expectedActions = [
            { "type": types.START_FETCHING_MOVIE_CAST_AND_CREW },
            { "type": types.FETCH_MOVIE_CAST_AND_CREW_FAILURE, payload: {error: error} },
        ];
        const store = mockStore({ error: null });

        return store.dispatch(fetchMovieCastAndCrew(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});