import React, {useState, useEffect} from 'react'
import Paginate from '../Pagination/Paginate'
import InfiniteList from '../InfiniteScroll/InfiniteList'
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
            <Paginate
                data={data}
                RenderComponent={Pokemon}
                dataLimit={9}
            /> : 
            <InfiniteList 
                data={data}
            /> 
        }
        </>
    )
}

export default ResponsiveLayout
