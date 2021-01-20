import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../componentes/DC/DcScrenn'
import { HeroScreen } from '../componentes/heroes/HeroScreen'
import { MarvelScreen } from '../componentes/marvel/MarvelScreen'
import { SearchScreen } from '../componentes/search/SearchScreen'
import { Navbar } from '../componentes/UI/NavBar'

export const DashboardRoutes = () => {

    
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/search" component={SearchScreen} />


                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

