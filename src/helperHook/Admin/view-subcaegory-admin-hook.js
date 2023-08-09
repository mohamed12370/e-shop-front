import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteOneSubCategory,
  getAllSubCategory,
  getAllSubCategoryPage,
} from '../../Redux/actions/subcategoryAction';

export default function ViewSubCaegoryAdminHook() {
  const dispatch = useDispatch();
  const { allSubcategory } = useSelector((state) => state);
  const { allSubCategory: allSubCat } = allSubcategory;
  //console.log(category);

  const [subCat, setSubCat] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const onPress = async (page) => {
    await dispatch(getAllSubCategoryPage(page));
  };

  const handleDelete = async (id) => {
    await dispatch(deleteOneSubCategory(id));
    await dispatch(getAllSubCategory(3));
  };

  useEffect(() => {
    dispatch(getAllSubCategory(3));
  }, [dispatch]);

  useEffect(() => {
    if (allSubCat?.data) {
      setSubCat(allSubCat?.data);
      setPageCount(allSubCat?.paginationResult?.numberOfPages);
    }
  }, [allSubCat]);

  return { subCat, pageCount, onPress, handleDelete };
}
