import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../Redux/actions/brandAction';

export default function HomeBrandHook() {
  const dispatch = useDispatch();
  const { allBrand } = useSelector((state) => state);
  const { brand, loading } = allBrand;
  //console.log(brand.data, loading);

  useEffect(() => {
    dispatch(getAllBrand(5));
  }, [dispatch]);

  return [loading, brand];
}
