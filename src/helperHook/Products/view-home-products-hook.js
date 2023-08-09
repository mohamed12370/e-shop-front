import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions/ProductAction';

export default function ViewHomeProductsHook() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state);
  const { allProducts: products } = allProducts;
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (products === undefined) {
      setItems([]);
    } else if (products.data) {
      setItems(products.data.slice(0, 4));
    }
  }, [products]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return { items };
}
