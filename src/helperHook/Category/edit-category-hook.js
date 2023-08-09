import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOneCategory,
  updateOneCategory,
} from '../../Redux/actions/categoryAction';
import { toast } from 'react-toastify';

export default function EditCategoryHook(id) {
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state);
  const { oneCategory, updateCategory } = allCategory;
  // console.log(updateCategory);

  const [catName, setCatName] = useState('');
  const [catImg, setCatImg] = useState('');
  const [selectCatImg, setSeletCatImg] = useState('');
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  useEffect(() => {
    dispatch(getOneCategory(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (oneCategory.data) {
      setCatImg(oneCategory.data.image);
      setSeletCatImg(oneCategory.data.image);
      setCatName(oneCategory.data.name);
    }
  }, [oneCategory]);

  const handleChangeName = (e) => {
    setCatName(e.target.value);
  };

  const handleCgangeImg = (e) => {
    setCatImg(URL.createObjectURL(e.target.files[0]));
    setSeletCatImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectCatImg === '') return toast.warn('  من فضلك اختر صورة ');
    if (catName === '') return toast.warn('  من فضلك ادخل اسم التصنيف ');

    const formData = new FormData();
    formData.append('name', catName);
    formData.append('image', selectCatImg);

    setLoading(true);
    setIsPress(true);
    await dispatch(updateOneCategory(id, formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (updateCategory.status === 200)
        toast.success('   تم تعديل البيانات بنجاح  ');
      setCatImg(null);
      setCatName('');
      setSeletCatImg('');
      setTimeout(() => {
        setLoading(true);
        setIsPress(false);
      }, 1500);
    }
  }, [loading, updateCategory]);

  return {
    catName,
    catImg,
    handleChangeName,
    handleCgangeImg,
    handleSubmit,
    loading,
    isPress,
  };
}
