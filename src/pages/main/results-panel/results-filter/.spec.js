import React from 'react';
import toJson from 'enzyme-to-json';
import ResultsFilter from './';
import { RELEASE_DATE_FILTER, RATING_FILTER } from './constants';

const setup = propOverrides => {
    const { filter } = propOverrides;
    const props = Object.assign({
        currentFilter: filter,
        setSortFilter: jest.fn()
    }, propOverrides);

    const wrapper = shallow(<ResultsFilter {...props}/>);

    return {
        wrapper,
        props
    }
}

describe('<ResultsFilter />', () => {

    it('render results filter - rating', () => {
        const { wrapper, props: {setSortFilter} } = setup({filter: RATING_FILTER});
        const link = wrapper.find('.results-filter__link_active');

        expect(link.text()).toEqual(RATING_FILTER);
        link.simulate('click');
        expect(setSortFilter).toBeCalled();

        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('render results filter - release date', () => {
        const { wrapper, props: {setSortFilter} } = setup({filter: RELEASE_DATE_FILTER});
        const link = wrapper.find('.results-filter__link_active');

        expect(link.text()).toEqual(RELEASE_DATE_FILTER);
        link.simulate('click');
        expect(setSortFilter).toBeCalled();

        expect(toJson(wrapper)).toMatchSnapshot();
    })
})