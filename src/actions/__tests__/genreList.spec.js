import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchGenres } from '../genreList';
import { START_FETCHING_GENRES, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../../constants';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(Axios);

describe('genre list actions', () => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=075cd6ced4baf51f5a02259700965b5d';
    const error = 'Error: Request failed with status code 500';

    afterEach(() => {
        mock.reset();    
    });

    it('creates FETCH_GENRES_SUCCESS when fetching genres has been done', () => {
        mock
            .onGet(url).reply(200, {
                genres: [
                    {id: 1, name: 'genre1'}, {id: 2, name: 'genre2'}
                ]
            });

        const expectedActions = [
            { "type": START_FETCHING_GENRES },
            { "type": FETCH_GENRES_SUCCESS, payload: [{id: 1, name: 'genre1'}, {id: 2, name: 'genre2'}]},
        ];
        const store = mockStore({ genres: [] });

        return store.dispatch(fetchGenres()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates FETCH_GENRES_FAILURE when fetching genres has been done', () => {
        mock
            .onGet(url).
                replyOnce(500, { error: error });

        const expectedActions = [
            { "type": START_FETCHING_GENRES },
            { "type": FETCH_GENRES_FAILURE, payload: {error: error} },
        ];
        const store = mockStore({ error: null });

        return store.dispatch(fetchGenres()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});