import React, { useState, useEffect } from 'react'

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
        <div>
            <a href={`https://pokemondb.net/pokedex/${name}`}>
                <h3>{id}</h3>
                <img src={img} />
                <h2>{name.toUpperCase()}</h2>
                
                <button onClick={() => alert(`${name.toUpperCase()}!`)}>
                   I Choose You
                </button>
            </a>
            
        </div>
    )
}

export default Pokemon