import { useState, useEffect } from 'react';
import { useAPI } from '../contexts/apiProvider';

const Pagination = () => {
    const {icoCalendar} = useAPI();
    
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const getItemsForPage = (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return icoCalendar?.slice(start, end);
  };

  getItemsForPage();
  
  // Render pagination buttons
  const renderPagination = () => {
    const totalPages = Math.ceil(icoCalendar?.length / itemsPerPage);

    return (
      <>
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <li
              key={page}
              className={page === currentPage ? 'active' : ''}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </li>
          );
        })}
      </>
    );
  };
  renderPagination();
};

export default Pagination;
