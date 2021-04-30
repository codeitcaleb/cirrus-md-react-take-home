import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Pokemon from '../../components/Pokemon'
import './InfiniteList.css'


const InfiniteList = ({data}) => {
    const perPage = 11;
    const [lastPosition, setLastPosition] = useState(perPage);
    const [allPokemon, setAllPokemon] = useState(data.slice(0, perPage));
    const [hasMore, setHasMore] = useState(true);

    const loadPokemon = () => {
        setTimeout(() => {  
            setAllPokemon((prev) => [
                ...prev, 
                ...data.slice(lastPosition, lastPosition + perPage)
            ]);     
            }, 500);      
            
            setLastPosition(lastPosition + perPage);   
    };

    return (
        <>
            <div className="inner-container nes-container">
                <InfiniteScroll 
                   dataLength={allPokemon.length}
                   next={loadPokemon}
                   hasMore={true}
                   loader={<h4>Loading...</h4>}
                   height={500}
                   endMessage={
                        <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                        </p>
                    }
                >

                {/* <div> */}
                {
                        allPokemon.map(pokemon => (
                            <Pokemon 
                                data={pokemon}
                            />
                        ))
                    }
                {/* </div> */}
                    
                </InfiniteScroll>
            </div>
       </>         
    )
};

export default InfiniteList