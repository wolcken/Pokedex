import React, { useState } from 'react'
import apiObjects from '../api/apiData';
// import ContextualExample from './Barra';
import Information from './Information';
import '../styles/pokemon.css'
import { v4 } from 'uuid';

const Pokemon = (props) => {
    const apiAttributes = `${props.url}`;
    // console.log(props);

    const attributes = apiObjects.usePokemons(apiAttributes);

    const apiColor = `pokemon-species/${props.name}`
    // const apiColor = 'pokemon-species/pikachu/'
    const species = apiObjects.useColor(apiColor);
    const color = species.color?.name;
    // console.log(color);
    // console.log(species);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='container-pokemon'>
                <div className='nomb-img'>
                    <h2 className="nombre">
                        {attributes.name}
                        {/* {color} */}
                    </h2>
                    <div className={color}>
                        <img
                            className='imagen'
                            src={attributes.sprites?.other.home.front_default}
                            alt="imagen"
                            onClick={handleShow}
                        />
                    </div>
                    {/* <section className='abilities'>
                        <span className="stat-name">
                            Abilities:
                        </span>
                        {attributes.abilities?.map((abil) => {
                            return (
                                <>
                                    <span>{abil.ability.name}</span>
                                </>
                            )
                        })}
                    </section> */}
                </div>
                {/* <div className='stats'>
                    {attributes.stats?.map((estadisticas) => {
                        return (
                            <>
                                <section className='container-stat'>
                                    <span className='stat-name'>
                                        {estadisticas.stat.name}:
                                    </span>
                                    <span className='stat-value'>
                                        {estadisticas.base_stat}
                                    </span>
                                </section>
                                <ContextualExample now={estadisticas.base_stat} key={estadisticas.stat.name} />
                            </>
                        )
                    })}
                </div> */}
            </div>
            <Information
                key={v4()}
                show={show}
                handleClose={handleClose}
                name={attributes.name}
                imagen={attributes.sprites?.other.home.front_default}
                attrib={attributes}
                spec={species}
                color={color}
                id={attributes.id}
            />
        </>
    )
}

export default Pokemon