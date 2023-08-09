import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProduct,
  getAllProducts,
  getAllProductsPage,
} from '../../Redux/actions/ProductAction';

export default function ViewProductsAdminHook() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state);
  const { allProducts: products } = allProducts;
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const handleDelete = async (id) => {
    await dispatch(deleteProduct(id));
    await dispatch(getAllProducts(3));
  };

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(3, page));
  };

  useEffect(() => {
    if (products === undefined) {
      setItems([]);
      setPageCount(0);
    } else if (products.data) {
      setItems(products.data);
      setPageCount(products.paginationResult.numberOfPages);
    }
  }, [products]);

  useEffect(() => {
    dispatch(getAllProducts(3));
  }, [dispatch]);

  return {
    items,
    pageCount,
    onPress,
    handleDelete,
  };
}
