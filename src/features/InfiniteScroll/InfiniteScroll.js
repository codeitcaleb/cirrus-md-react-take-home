import React, {useState, useEffect, useRef} from 'react'
import Pokemon from '../../components/Pokemon'

const InfiniteScroll = ({data}) => {
    console.log(data);
    const [page, setPage] = useState(1);
    const loader = useRef(null);

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver(handleObserver, options)
        
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);

    // useEffect(() => {

    // }, [page]);

    const handleObserver = (e) => {
        const target = e[0];

        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    };

    return (
        <div>
            {
                data.map(pokemon => (
                    <Pokemon 
                        data={pokemon}
                    />
                ))
            }

            <div className="loading" ref={loader}>
                <h3>Load More</h3>
            </div>
        </div>
    )
}

export default InfiniteScroll