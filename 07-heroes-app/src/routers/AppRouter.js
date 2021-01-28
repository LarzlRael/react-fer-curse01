import React, { useContext } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScrenn } from '../componentes/login/LoginScrenn';
import { DashboardRoutes } from './DashboardRoutes';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export default function AppRouter() {

    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScrenn}
                        isAuthenticaded={user.logged}

                    />

                    <PrivateRoute
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticaded={user.logged}
                    />


                </Switch>
            </div>
        </Router>
    );
}