import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import AppRouter from "../../routers/AppRouter";

describe('Testing in <AppRouter />', () => {

    const contextValue = {
        dispath: jest.fn(),
        user: {
            logged: false
        }
    }

    test('should be the login is the user is not authenticate', () => {

        const wrapper = mount(
            <AuthContext.Provider
                value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>

        )

        expect(wrapper).toMatchSnapshot();
    });

    test('should display the marvel if is the user is authenticate', () => {
        const contextValue = {
            dispath: jest.fn(),
            user: {
                logged: true,
                name: 'juan'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>

        )

        expect(wrapper.find('.navbar').exists()).toBe(true);
    })


});
