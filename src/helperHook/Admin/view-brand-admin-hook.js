import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteOneBrand,
  getAllBrand,
  getAllBrandPage,
} from '../../Redux/actions/brandAction';

export default function ViewBrandAdminHook() {
  const dispatch = useDispatch();
  const { allBrand } = useSelector((state) => state);
  const { brand } = allBrand;
  // console.log(brand);

  const [brandArr, setBrandArr] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const handleDelete = async (id) => {
    await dispatch(deleteOneBrand(id));
    await dispatch(getAllBrand());
  };

  const onPress = async (page) => {
    await dispatch(getAllBrandPage(page));
  };

  useEffect(() => {
    dispatch(getAllBrand());
  }, [dispatch]);

  useEffect(() => {
    if (brand?.data) {
      setBrandArr(brand?.data);
      setPageCount(brand?.paginationResult?.numberOfPages);
    }
  }, [brand]);

  return { brandArr, pageCount, onPress, handleDelete };
}
