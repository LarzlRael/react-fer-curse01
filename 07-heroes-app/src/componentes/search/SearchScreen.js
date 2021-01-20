import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../Hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // get the location with react router dom
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInpuChange] = useForm({
        searchText: q
    })

    const { searchText } = formValues;

    const heroFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-md-5">
                    <h4>Searchi Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input type="text"
                            className="form-control"
                            placeholder="Find your Hero"
                            name="searchText"
                            value={searchText}
                            autoComplete="off"
                            onChange={handleInpuChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary">
                            Search....
                        </button>
                    </form>
                </div>

                <div className="col-md-7">

                    <h4>Result</h4>

                    {
                        (q !== '')
                        &&
                        <div className="alert alert-info">
                            There is no a hero with {q}
                        </div>
                    }
                    {
                        heroFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
