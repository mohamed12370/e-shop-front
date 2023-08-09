import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategory,
  getAllCategoryPage,
} from '../../Redux/actions/categoryAction';

export default function AllCategoryHook() {
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state);
  const { category, loading } = allCategory;
  // console.log(category);

  const [allCat, setAllCat] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // when first load
  useEffect(() => {
    dispatch(getAllCategory(4, 1));
  }, [dispatch]);

  useEffect(() => {
    if (category?.data) setAllCat(category?.data);
    else setAllCat([]);

    if (category?.paginationResult)
      setPageCount(category?.paginationResult?.numberOfPages);
    else setPageCount(0);
  }, [category]);

  // to get page count
  // let pageCount = 0;
  // try {
  //   if (category.paginationResult)
  //     pageCount = category.paginationResult.numberOfPages;
  // } catch (err) {}

  // when press pagination
  const getPage = (page) => {
    //console.log(page);
    dispatch(getAllCategoryPage(page, 4));
  };

  return [category, loading, pageCount, getPage, allCat];
}
