import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight,faAnglesLeft,faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Pagination.css';

export function Pagination(props){

    const [currentPage,setCurrentPage] = useState(props.page);
    const totalPages = props.totalPages;
    const pageLimit=3;

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(totalPages-start >= pageLimit?pageLimit:totalPages-start).fill().map((_, idx) => start + idx + 1);
      };

    const pageClickHandler = (page) => {
        setCurrentPage(page);
        props.onPageChange(page);
    }

    return (
        <div className='pagination'>
            <button
        onClick={()=>{ pageClickHandler(1) }}  disabled={currentPage === 1}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
            
        <button
        onClick={()=>{ pageClickHandler(currentPage-1) }} disabled={currentPage === 1}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={()=>{ pageClickHandler(item) }}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={()=>{ pageClickHandler(currentPage+1) }}  disabled={currentPage === totalPages}
        className={`next ${currentPage === totalPages ? 'disabled' : ''}`}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        onClick={()=>{ pageClickHandler(totalPages) }}  disabled={currentPage === totalPages}
        className={`next ${currentPage === totalPages ? 'disabled' : ''}`}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
       </div>
    );
}