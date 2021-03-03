import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../componentes/search/SearchScreen';
mount

describe('Testing in <SearchScreen />', () => {

    test('should display correctly with default values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    });

    test('should show a Batman and the input with the value of queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });

    test('should display a error if the hero is not a found', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('.alert-info').text().trim()).toBe('There is no a hero with batman123');
        expect(wrapper).toMatchSnapshot();

    });

    test('should call the history push', () => {
        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route
                    path="/search"
                    component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault() { }
        });

        expect(history.push).toHaveBeenCalledWith('?q=batman');
    })





})
