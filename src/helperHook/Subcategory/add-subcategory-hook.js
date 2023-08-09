import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/categoryAction';
import { toast } from 'react-toastify';
import { createSubcategory } from '../../Redux/actions/subcategoryAction';

export default function AddSubcategoryHook() {
  const [id, setId] = useState('0');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state);
  const { category } = allCategory;
  //console.log(category.data);

  const { allSubcategory } = useSelector((state) => state);
  const { subcategory } = allSubcategory;
  //console.log(subcategory);

  useEffect(() => {
    if (!navigator.onLine)
      return toast.warn(' هناك مشكلة فى الاتصال بالانترنت ');
    dispatch(getAllCategory());
  }, [dispatch]);

  // on change dropdown menu
  const handleChangeId = (e) => {
    //console.log(e.target.value);
    setId(e.target.value);
  };

  // on change input name
  const handleChangeName = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };

  // on click to send data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine)
      return toast.warn(' هناك مشكلة فى الاتصال بالانترنت ');
    if (id === '0') {
      return toast.warn(' من فضلك اختر تصنيف رئيسى ');
    }
    if (name === '') {
      return toast.warn(' من فضلك ادخل اسم التصنيف الفرعى ');
    }
    setLoading(true);
    await dispatch(createSubcategory({ name, category: id }));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setName('');
      setId('0');
      if (subcategory?.status === 201) toast.success('تمت الاضافى بنجاح');
      else if (
        subcategory === 'error AxiosError: Request failed with status code 400'
      )
        toast.info('هذا الاسم مكرر من فضلك اختر اسم اخر');
      else toast.error('هناك مشكلة فى عملية الاضافة');
      setLoading(true);
    }
  }, [loading, subcategory]);

  return [handleChangeName, name, handleChangeId, category, handleSubmit];
}
