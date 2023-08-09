import React from 'react';
import CategoryContainer from '../../Components/Category/CategoryContainer';
import Pagination from '../../Components/Uitily/Pagination';
import AllCategoryHook from '../../helperHook/Category/all-category-page-hook';

export default function AllCategoryPage() {
  const [, loading, pageCount, getPage, allCat] = AllCategoryHook();

  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer data={allCat} loading={loading} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
}
