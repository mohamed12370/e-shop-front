import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOneProduct,
  getProductLike,
} from '../../Redux/actions/ProductAction';
import mobile from '../../Images/mobile.png';
import { getOneCategory } from '../../Redux/actions/categoryAction';
import { getOneBrand } from '../../Redux/actions/brandAction';

export default function ViewProductDetailsHook(prodId) {
  const dispatch = useDispatch();
  const { allProducts, allCategory, allBrand } = useSelector((state) => state);
  const { oneProduct, productLike } = allProducts;
  const { oneCategory } = allCategory;
  const { oneBrand } = allBrand;

  let item = useMemo(() => {
    return oneProduct?.data ? oneProduct?.data : [];
  }, [oneProduct]);

  let cat = oneCategory?.data ? oneCategory?.data : [];

  let prodLike = productLike?.data ? productLike?.data : [];

  // to show products brand
  let brand = oneBrand.data ? oneBrand.data : [];
  //console.log(brand);

  // to view images gallery
  let images = item?.images?.length
    ? item.images.map((item) => {
        return { original: item };
      })
    : [{ original: `${mobile}` }];

  useEffect(() => {
    dispatch(getOneProduct(prodId));
  }, [dispatch, prodId]);

  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category));
      dispatch(getProductLike(item.category));
    }
    if (item.brand) dispatch(getOneBrand(item.brand));
  }, [dispatch, item]);

  return { item, images, cat, brand, prodLike };
}
