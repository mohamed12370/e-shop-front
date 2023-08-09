import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allReviewProduct,
  deleteReviewProduct,
} from '../../Redux/actions/reviewAction';
import { toast } from 'react-toastify';

export default function DeleteReviewHook(item, prodId) {
  const dispatch = useDispatch();
  const { reviewReducer } = useSelector((state) => state);
  const { deleteReview } = reviewReducer;

  const [loading, setLoading] = useState(false);
  const [isPriss, setIsPriss] = useState(false);

  const handleDelete = async () => {
    //console.log(item);
    setLoading(true);
    setIsPriss(true);
    await dispatch(deleteReviewProduct(item._id));
    setLoading(false);
    await dispatch(allReviewProduct(prodId, 1, 5));
  };

  useEffect(() => {
    if (isPriss && !loading) {
      if (
        deleteReview.data &&
        deleteReview.data?.message ===
          'You are not logged in. Please login to get access'
      ) {
        toast.error(
          ' انتهت الجلسة الخاصة بك اعد تسجيل الدخول لكى تتمكن من اجراء هذا الطلب '
        );
        setTimeout(() => {
          setIsPriss(false);
        }, 2000);
      } else if (deleteReview === '') {
        toast.success(' تم حذف التقيم بنجاح ');
        setTimeout(() => {
          setIsPriss(false);
        }, 2000);
      }
    }
  }, [deleteReview, isPriss, loading]);

  return { handleDelete };
}
