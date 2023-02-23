import React from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import apiObjects from '../api/apiData';
// import { v4 } from 'uuid';
import '../styles/modal.css';

import ContextualExample from './Barra';

const Information = ({ show, handleClose, name, id, imagen, attrib, spec, color }) => {

    const attributes = attrib;
    // console.log(attributes);

    const species = spec;
    // console.log(species)

    // const apiEvolution = `evolution-chain/${id}/`;
    // const evolutions = apiObjects.useEvolution(apiEvolution);
    // console.log(evolutions.chain.evolves_to);

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                {/* <Modal.Header closeButton>
                    <Modal.Title>
                        <h1 className="title-modal">
                            Information Card
                        </h1>
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className='container-body-modal'>
                        <div className="perfil">
                            <div className={color}>
                                <img className='imagen-modal' src={imagen} alt="Poke" />
                            </div>
                            <div className="information">
                                <h5>Information:</h5>
                                {species.flavor_text_entries?.map((detail, index) => {
                                    if (index === 0 || index === 2 || index === 6) {
                                        return (
                                            <p key={index} className='text-detail'>{detail.flavor_text}</p>
                                        )
                                    } else {
                                        return (
                                            <></>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className="details">
                            <h1 className='name-modal'>{name}</h1>
                            <h5>Stats</h5>
                            <section className='abilities'>
                                <span className="stat-name">
                                    Abilities:
                                </span>
                                {attributes.abilities?.map((abil, index) => {
                                    return (
                                        <>
                                            <span key={index} className='ability-name'>{abil.ability.name}</span>
                                        </>
                                    )
                                })}
                            </section>
                            <section className='stats'>
                                {attributes.stats?.map((estadisticas, index) => {
                                    return (
                                        <>
                                            <section key={index} className='container-stat'>
                                                <span className='stat-name'>
                                                    {estadisticas.stat.name}:
                                                </span>
                                                <ContextualExample now={estadisticas.base_stat} key={estadisticas.stat.name} />
                                            </section>
                                        </>
                                    )
                                })}
                            </section>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default Information
