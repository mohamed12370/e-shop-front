import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand, getAllBrandPage } from '../../Redux/actions/brandAction';

export default function AllBrandHook() {
  const dispatch = useDispatch();
  const { allBrand } = useSelector((state) => state);
  const { brand, loading } = allBrand;

  // when first load
  useEffect(() => {
    dispatch(getAllBrand(4));
  }, [dispatch]);

  // to get page count
  let pageCount = 0;
  if (brand.paginationResult) pageCount = brand.paginationResult.numberOfPages;

  // when press pagination
  const getPage = (page) => {
    //console.log(page);
    dispatch(getAllBrandPage(page));
  };

  return [brand, loading, pageCount, getPage];
}
