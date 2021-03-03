import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { HeroScreen } from "../../componentes/heroes/HeroScreen"

describe('Testing in <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={history} />
        /</MemoryRouter>
    )
    test('should display the component if there is not URL arguments', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history} />
            /</MemoryRouter>
        )

        expect(wrapper.find('Redirect').exists()).toBe(true);
    })

    test('should display a hero if the hero exists', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={HeroScreen} />
            /</MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('should return to last screen with PUSH', () => {


        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={() => <HeroScreen history={history} />}
                />
            /</MemoryRouter>

        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();


    });

    test('should return a last screen with GOBACK', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={(props) => <HeroScreen history={history} />}
                />
            /</MemoryRouter>

        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.push).not.toHaveBeenCalled();
    });


    test('should call the direct if the hero is not exists', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderman-123k']}>
                <Route
                    path="/hero/:heroId"
                    component={() => <HeroScreen history={history} />}
                />
            /</MemoryRouter>

        );


        expect(wrapper.text() ).toBe('/');
    })




})
