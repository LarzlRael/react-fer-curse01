import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe('Testing in <PrivateRotue />', () => {
    test('should display the component is the user is autenticate and save in localstorage', () => {

        const props = {
            location: {
                pathname: '/marvel'
            }
        }

        Storage.prototype.setItem = jest.fn();



        const wrapper = mount(
            <MemoryRouter >
                <PrivateRoute
                    isAuthenticaded={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')

    });

    test('should block the component if the user is not authenticate', () => {

        const props = {
            location: {
                pathname: '/marvel'
            }
        }

        Storage.prototype.setItem = jest.fn();



        const wrapper = mount(
            <MemoryRouter >
                <PrivateRoute
                    isAuthenticaded={false}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')


    })


})
