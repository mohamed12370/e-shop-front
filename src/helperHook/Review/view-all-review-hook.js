import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allReviewProduct } from '../../Redux/actions/reviewAction';

export default function ViewAllReviewHook(id) {
  const dispatch = useDispatch();
  const { reviewReducer } = useSelector((state) => state);
  const { allReviewProd } = reviewReducer;
  //console.log(allReviewProd);

  useEffect(() => {
    dispatch(allReviewProduct(id, 1, 5));
  }, [dispatch, id]);

  const onPress = async (page) => {
    await dispatch(allReviewProduct(id, page, 5));
  };

  return { allReviewProd, onPress };
}
