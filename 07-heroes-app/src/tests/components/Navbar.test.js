import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../../componentes/UI/NavBar";
import { types } from "../../types/types";

describe('Testing in <Navbar />', () => {


    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            name: 'juanitoxd'

        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter >
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('should display correctly', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('juanitoxd');

    });

    test('should call the logout and use the history', () => {

        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })




})
