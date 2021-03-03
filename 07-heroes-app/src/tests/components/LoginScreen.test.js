import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { LoginScrenn } from "../../componentes/login/LoginScrenn"
import { types } from "../../types/types"

describe('Testing in <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>

            <LoginScrenn history={history} />

        </AuthContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should realize the dispatch and the navigation', () => {

        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Larz'
            }
        });

        expect(history.replace).toHaveBeenCalled();
    })

    test('should save the last path in the localstorage', () => {

        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Larz'
            }
        });

        expect(history.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');
        handleClick();

        expect(history.replace).toHaveBeenCalledWith('/dc');
    })




})
