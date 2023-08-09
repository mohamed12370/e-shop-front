import React from 'react';
import BrandContainer from '../../Components/Brands/BrandContainer';
import Pagination from '../../Components/Uitily/Pagination';
import AllBrandHook from '../../helperHook/Brand/all-brand-page-hook';

export default function AllBrandPage() {
  const [brand, loading, pageCount, getPage] = AllBrandHook();

  return (
    <div style={{ minHeight: '670px' }}>
      <BrandContainer data={brand.data} loading={loading} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
}
