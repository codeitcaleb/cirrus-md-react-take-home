import {useState} from 'react'

import './Pagination.css'

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
        <div>
           <h1>{title}</h1>

           <div className="pagination">
               <button
                 onClick={goToPreviousPage}
                 className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    Prev
                </button>
           </div>

            <button 
                onClick={goToNextPage}
                className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
               Next
            </button>

           <div className="dataContainer">
               {getPaginatedData().map((d, idx) => (
                <RenderComponent key={idx} data={d} />
               ))}
           </div>

        </div>
    )
}

export default Pagination