import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/categoryAction';

export default function HomeCategoryHook() {
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state);
  const { category, loading } = allCategory;
  //console.log(category.data, loading);

  const colors = [
    '#FFD3E8',
    '#F4DBA5',
    '#55CFDF',
    '#FF6262',
    '#0034FF',
    '#FFD3E8',
  ];

  useEffect(() => {
    dispatch(getAllCategory(5));
  }, [dispatch]);

  return [loading, category, colors];
}
