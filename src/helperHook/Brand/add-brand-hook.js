import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import avatar from '../../Images/avatar.png';
import { createBrand } from '../../Redux/actions/brandAction';

export default function AddBrandHook() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.allBrand.brand);

  const [img, setImg] = useState(avatar);
  const [selectImg, setSelectImage] = useState(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  // when image change save it
  const onImageChange = (e) => {
    if (e.target.files.length) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectImage(e.target.files[0]);
    }
  };

  // when image change save it
  const onChangeName = (e) => {
    setName(e.target.value);
    //console.log(e.target.value);
  };

  // save data in database
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || selectImg === null)
      return toast.warning('من فضلك اكمل البيانات');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', selectImg);
    setLoading(true);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setImg(avatar);
      setName('');
      setSelectImage(null);
      //console.log('finshied');
      if (res.status === 201) toast.success('تمت الاضافة بنجاح');
      else toast.error('هناك مشكلة فى عملية الاضافة');
      setTimeout(() => {
        setLoading(true);
        setIsPress(false);
      }, 3000);
    }
  }, [loading, res]);

  return [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ];
}
