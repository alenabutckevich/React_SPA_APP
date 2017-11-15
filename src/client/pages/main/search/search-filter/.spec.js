import React from 'react';
import toJson from 'enzyme-to-json';
import SearchFilter from './search-filter';
import { TITLE_FILTER, DIRECTOR_FILTER } from './constants';

const setup = propOverrides => {
    const { currentFilter } = propOverrides;
    const props = Object.assign({
        currentFilter: currentFilter,
        changeFilter: jest.fn()
    }, propOverrides);

    const wrapper = shallow(<SearchFilter {...props}/>);

    return {
        wrapper,
        props
    }
}

describe('<SearchFilter />', () => {

    it('render search filter - director', () => {
        const { wrapper, props: {changeFilter} } = setup({currentFilter: DIRECTOR_FILTER});   
        const link = wrapper.find('.search_filter__button_active');

        expect(link.text()).toEqual(DIRECTOR_FILTER);
        link.simulate('click');
        expect(changeFilter).toBeCalled();

        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('render search filter - title', () => {
        const { wrapper, props: {changeFilter} } = setup({currentFilter: TITLE_FILTER});
        const link = wrapper.find('.search_filter__button_active');

        expect(link.text()).toEqual(TITLE_FILTER);
        link.simulate('click');
        expect(changeFilter).toBeCalled();
       
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})