import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {


    return (
        <div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        src={`./assets/heroes/${id}.jpg`}
                        className="card-img"
                        alt={superhero} />
                </div>

                <div className="col-md-8">

                    <div className="card title">{superhero}</div>
                    <p className="car-text">{alter_ego}</p>

                    {
                        (alter_ego !== characters)
                        && <p className="card-text">{characters}</p>
                    }

                    <div className="card-text">
                        <div className="text-muted">
                            <small className="text-muted">
                                {first_appearance}
                            </small>
                        </div>
                    </div>
                    <Link to={`/hero/${id}`} >Más ...</Link>

                </div>
            </div>
        </div>
    )
}
