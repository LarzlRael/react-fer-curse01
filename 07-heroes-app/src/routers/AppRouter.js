import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import { LoginScrenn } from '../componentes/login/LoginScrenn';
import { MarvelScreen } from '../componentes/marvel/MarvelScreen';
import { Navbar } from '../componentes/UI/NavBar';
import { DashboardRoutes } from './DashboardRoutes';

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={LoginScrenn} />
                    <Route path="/" component={DashboardRoutes} />

                </Switch>
            </div>
        </Router>
    );
}