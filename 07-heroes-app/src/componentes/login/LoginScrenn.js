import React from 'react'

export const LoginScrenn = ({ history }) => {

    const handleLogin = () => {
        // create a push in the history routes
        // history.push('/')
        // create a reaplce in the history routes
        history.replace('/')
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
