import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Testing in autReducer', () => {



    test('should return the default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false })
    });

    test('should authenticate y set the username', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'fernando'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            name: 'fernando'
        })

    });

    test('should erase the username and logged in false', () => {
        const action = {
            type: types.logout,

        }

        const state = authReducer({ logged: false, name: 'Fer' }, action);
        expect(state).toEqual({
            logged: false,
            
        })
    })



})
