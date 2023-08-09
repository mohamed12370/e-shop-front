import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSubCategoryId,
  updateSubCategoryId,
} from '../../Redux/actions/subcategoryAction';
import { getAllCategory } from '../../Redux/actions/categoryAction';
import { toast } from 'react-toastify';

export default function EditSubCategoryHook(id) {
  const dispatch = useDispatch();
  const { allCategory, allSubcategory } = useSelector((state) => state);
  const { category } = allCategory;
  const { oneSubCategory, updateSubCategory } = allSubcategory;
  //console.log(updateSubCategory);

  const [subcatName, setSubcatName] = useState('');
  const [catId, setCatId] = useState('');
  const [catArr, setCatArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChangeName = (e) => {
    setSubcatName(e.target.value);
  };

  const handleChangeId = (e) => {
    //console.log(e.target.value);
    setCatId(e.target.value);
  };

  useEffect(() => {
    dispatch(getSubCategoryId(id));
    dispatch(getAllCategory());
  }, [dispatch, id]);

  useEffect(() => {
    if (oneSubCategory?.data) {
      setSubcatName(oneSubCategory?.data?.name);
      setCatId(oneSubCategory?.data?.category);
    }
  }, [oneSubCategory]);

  useEffect(() => {
    if (category?.data) {
      setCatArr(category?.data);
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine)
      return toast.warn(' هناك مشكلة فى الاتصال بالانترنت ');
    if (catId === '0') {
      return toast.warn(' من فضلك اختر تصنيف رئيسى ');
    }
    if (subcatName === '') {
      return toast.warn(' من فضلك ادخل اسم التصنيف الفرعى ');
    }
    setLoading(true);
    await dispatch(
      updateSubCategoryId(id, { name: subcatName, category: catId })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setSubcatName('');
      setCatId('0');
      if (updateSubCategory?.status === 200) toast.success('تمت الاضافى بنجاح');
      else if (
        updateSubCategory ===
        'error AxiosError: Request failed with status code 400'
      )
        toast.info('هذا الاسم مكرر من فضلك اختر اسم اخر');
      else toast.error('هناك مشكلة فى عملية الاضافة');
      setLoading(true);
    }
  }, [loading, updateSubCategory]);

  return {
    subcatName,
    handleChangeName,
    handleChangeId,
    catArr,
    catId,
    handleSubmit,
  };
}
