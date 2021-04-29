import React, {useState, useEffect} from 'react'
import Pagination from '../Pagination/Pagination'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'
import Pokemon from '../../components/Pokemon'

const ResponsiveLayout = ({data}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
    
        return () => window.removeEventListener('resize', handleWindowResize);
      }, [width])

    return (
        <> {
            width > breakpoint ? 
            <Pagination
                data={data}
                RenderComponent={Pokemon}
                dataLimit={9}
            /> : 
            <InfiniteScroll 
                data={data}
            /> 
        }
        </>
    )
}

export default ResponsiveLayout
