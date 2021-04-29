import React, { useState, useEffect } from 'react'
import './Pokemon.css'

const Pokemon = (props) => {
    const {name, url} = props.data;
    const [img, setImg] = useState('');
    const [id, setID] = useState('');

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data =>  {
            setID(data.id)
            setImg(data.sprites.front_default)
        })
    }, [name, url])

    return (
        <div className="pokemon-container">
            <a href={`https://pokemondb.net/pokedex/${name}`}>
                <div className="pokemon-card nes-container">
                    <h3 className="dex-number">{id}</h3>
                    <img className="pokemon-img" src={img} alt={`${name}`} />
                    <h2 className="pokemon-name">{name.toUpperCase()}</h2>
                            
                    <button className="nes-btn is-primary" onClick={() => alert(`${name.toUpperCase()}!`)}>
                        I Choose You
                    </button>
                </div>
            </a>
            
        </div>
    )
}

export default Pokemon