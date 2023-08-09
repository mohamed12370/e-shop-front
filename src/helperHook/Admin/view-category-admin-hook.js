import { useEffect, useState } from 'react';
import {
  deleteOneCategory,
  getAllCategory,
  getAllCategoryPage,
} from '../../Redux/actions/categoryAction';
import { useDispatch, useSelector } from 'react-redux';

export default function ViewCategoryAdminHook() {
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state);
  const { category } = allCategory;
  //console.log(category);

  const [catArr, setCatArr] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const handleDelete = async (id) => {
    await dispatch(deleteOneCategory(id));
    await dispatch(getAllCategory());
  };

  const onPress = async (page) => {
    await dispatch(getAllCategoryPage(page));
  };

  useEffect(() => {
    dispatch(getAllCategory(4));
  }, [dispatch]);

  useEffect(() => {
    if (category?.data) {
      setCatArr(category.data);
      setPageCount(category?.paginationResult?.numberOfPages);
    }
  }, [category]);

  return { catArr, pageCount, onPress, handleDelete };
}
