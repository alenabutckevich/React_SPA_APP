import React from 'react';
import toJson from 'enzyme-to-json';
import Search from './search';

const setup = propOverrides => {
    const props = Object.assign({
        query: 'query',
        changeFilter: jest.fn(),
    }, propOverrides);

    const wrapper = shallow(<Search {...props}/>);

    return {
        wrapper,
        props
    }
}

describe('<Search />', () => {

    it('render search', () => {
        const { wrapper, props: {changeFilter} } = setup();
        const input = wrapper.find('.search__input');

        expect(input.prop('defaultValue')).toEqual('query');
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})