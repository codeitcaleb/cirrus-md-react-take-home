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
            <a href="https://www.google.com/">
                <h3>{id}</h3>
                <img src={img} />
                <h2>{name}</h2>
                
                <a href={url}>
                    <button>
                        I Choose You
                    </button>
                </a>
            </a>
            
        </div>
    )
}

export default Pokemon