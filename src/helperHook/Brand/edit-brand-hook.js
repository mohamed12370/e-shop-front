import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneBrand, updateOneBrand } from '../../Redux/actions/brandAction';
import { toast } from 'react-toastify';

export default function EditBrandHook(id) {
  const dispatch = useDispatch();
  const { allBrand } = useSelector((state) => state);
  const { oneBrand, updateBrand } = allBrand;
  //   console.log(updateBrand);

  const [brandName, setBrandName] = useState('');
  const [brandImg, setBrandImg] = useState('');
  const [selectBrandImg, setSeletBrandImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [imgFlag, setImgFlag] = useState(false);

  useEffect(() => {
    dispatch(getOneBrand(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (oneBrand.data) {
      setBrandImg(oneBrand.data.image);
      setSeletBrandImg(oneBrand.data.image);
      setBrandName(oneBrand.data.name);
    }
  }, [oneBrand]);

  const handleChangeName = (e) => {
    setBrandName(e.target.value);
  };

  const handleCgangeImg = (e) => {
    setBrandImg(URL.createObjectURL(e.target.files[0]));
    setSeletBrandImg(e.target.files[0]);
    setImgFlag(true);
  };

  //convert image url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.blob();
    const ext = url.split('.').pop();
    const filename = url.split('/').pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  const handleSubmit = async (e) => {
    let newBrandImg;
    e.preventDefault();
    if (selectBrandImg === '' || brandName === '')
      return toast.warn('  من فضلك اكمل البيانات ');

    const formData = new FormData();
    if (!imgFlag) {
      newBrandImg = await convertURLtoFile(selectBrandImg);
      //console.log(newBrandImg);
      formData.append('name', brandName);
      setTimeout(() => {
        formData.append('image', newBrandImg);
      }, 2000);
    } else {
      // console.log(selectBrandImg);
      formData.append('name', brandName);
      formData.append('image', selectBrandImg);
    }

    setTimeout(async () => {
      setLoading(true);
      setIsPress(true);
      await dispatch(updateOneBrand(id, formData));
      setLoading(false);
    }, 2500);
  };

  useEffect(() => {
    if (!loading && isPress) {
      //console.log(updateBrand);
      if (updateBrand && updateBrand?.status === 200) {
        toast.success('   تم تعديل البيانات بنجاح  ');
        setBrandImg(null);
        setBrandName('');
        setSeletBrandImg('');
        setImgFlag(false);
        setTimeout(() => {
          setLoading(false);
          setIsPress(false);
        }, 1500);
      } else if (updateBrand && updateBrand?.response?.status === 500) {
        toast.error('  رجاء اختر صورة لكى يتم اجراء الطلب  ');
        setLoading(false);
        setIsPress(false);
      } else {
        toast.error('  try again later time ');
        setLoading(false);
        setIsPress(false);
      }
    }
  }, [loading, updateBrand, isPress]);

  return {
    brandName,
    brandImg,
    handleChangeName,
    handleCgangeImg,
    handleSubmit,
    loading,
    isPress,
  };
}
