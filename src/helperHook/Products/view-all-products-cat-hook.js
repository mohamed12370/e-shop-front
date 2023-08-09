import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByCategory } from '../../Redux/actions/ProductAction';

export default function ViewAllProductsCategoryHook(catId) {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state);
  const { allProductsCategory } = allProducts;
  //console.log(allProductsCategory);

  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    dispatch(getAllProductsByCategory(catId, 4, 1));
  }, [catId, dispatch]);

  useEffect(() => {
    if (allProductsCategory?.data?.length) {
      setItems(allProductsCategory?.data);
    }
    if (allProductsCategory?.paginationResult?.numberOfPages) {
      setPageCount(allProductsCategory?.paginationResult?.numberOfPages);
    }
  }, [allProductsCategory]);

  const onPress = async (page) => {
    await dispatch(getAllProductsByCategory(catId, 4, page));
  };

  return { items, pageCount, onPress };
}
