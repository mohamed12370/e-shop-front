import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  allReviewProduct,
  updateReviewProduct,
} from '../../Redux/actions/reviewAction';

export default function EditRateHook(item, prodId) {
  const dispatch = useDispatch();
  const { reviewReducer } = useSelector((state) => state);
  const { updateReview } = reviewReducer;

  const [showEdit, setShowEdit] = useState(false);
  const [newRateValue, setNewRateValue] = useState(item?.rating);
  const [newRateText, setNewRateText] = useState(item?.review);
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleNewRateText = (e) => {
    setNewRateText(e.target.value);
  };

  const handleNewRateValue = (rateValue) => {
    setNewRateValue(rateValue);
  };

  const handleEdit = async () => {
    if (!newRateText) return toast.warn(' من ادخل نص التقيم الجديد ');
    if (!newRateValue) return toast.warn(' من فضلك ادخل قيمة التقيم الجديد ');

    setLoading(true);
    setIsPress(true);
    await dispatch(
      updateReviewProduct(item._id, {
        review: newRateText,
        rating: newRateValue,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (isPress && !loading) {
      //console.log(updateReview);
      if (updateReview.status && updateReview.status === 200) {
        toast.success(' تم تعديل التقيم بنجاح ');
        setIsPress(false);
        setShowEdit(false);
        dispatch(allReviewProduct(prodId, 1, 5));
      } else {
        toast.error(' هناك مشكلة فى عملية التعديل ');
        setIsPress(false);
        setShowEdit(false);
        dispatch(allReviewProduct(prodId, 1, 5));
      }
    }
  }, [isPress, loading, updateReview, dispatch, prodId]);

  return {
    showEdit,
    newRateText,
    newRateValue,
    handleEdit,
    handleCloseEdit,
    handleShowEdit,
    handleNewRateText,
    handleNewRateValue,
  };
}
