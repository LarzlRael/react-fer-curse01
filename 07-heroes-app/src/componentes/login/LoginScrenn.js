
import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScrenn = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    const handleLogin = () => {

        // getting the last path
        const lastPath = localStorage.getItem('lastPath') || '/';

        // create a push in the history routes
        // history.push('/')
        // create a reaplce in the history routes

        // extract dispatch function
        dispatch({
            type: types.login,
            payload: {
                name: 'Larz'
            }
        });

        history.replace(lastPath);

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <h1>
                <button
                    onClick={handleLogin}
                    type="button" className="btn btn-primary">Login</button>
            </h1>
        </div>
    )
}
