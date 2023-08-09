import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByBrand } from '../../Redux/actions/ProductAction';

export default function ViewAllProductsBrandHook(brandId) {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state);
  const { allProductsBrand } = allProducts;
  //console.log(allProductsCategory);

  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    dispatch(getAllProductsByBrand(brandId, 4, 1));
  }, [brandId, dispatch]);

  useEffect(() => {
    if (allProductsBrand?.data?.length) {
      setItems(allProductsBrand?.data);
    }
    if (allProductsBrand?.paginationResult?.numberOfPages) {
      setPageCount(allProductsBrand?.paginationResult?.numberOfPages);
    }
  }, [allProductsBrand]);

  const onPress = async (page) => {
    await dispatch(getAllProductsByBrand(brandId, 4, page));
  };

  return { items, pageCount, onPress };
}
