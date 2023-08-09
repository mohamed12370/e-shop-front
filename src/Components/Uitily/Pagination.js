import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ pageCount, onPress }) {
  const handlePageClick = ({ selected }) => {
    onPress(selected + 1);
  };

  return (
    <div style={{}}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
}
