import {useState} from 'react'

import './Pagination.css'
import arrow from '../images/arrow.png'

const Pagination = ({data, RenderComponent, title, pageLimit, dataLimit}) => {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    console.log(data)

    const goToNextPage = () => {
      setCurrentPage((page) => page + 1)
    }

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1)
    }

    const getPaginatedData = () => {
      const startIndex = currentPage * dataLimit - dataLimit;
      const endIndex = startIndex + dataLimit;
      
      return data.slice(startIndex, endIndex);
    }

    return (
        <div className="outer nes-container">
           
           <div className="pagination">
               <button
                 onClick={goToPreviousPage}
                 className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    <img className="left-arrow" src={arrow} alt="Previous"/>
                </button>

                <button 
                onClick={goToNextPage}
                className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
               <img className="right-arrow" src={arrow} alt="Next"/>
            </button>
           </div>

           <div className="paginated-container nes-container">
               {getPaginatedData().map((d, idx) => (
                <RenderComponent key={idx} data={d} />
               ))}
           </div>
        </div>
    )
}

export default Pagination