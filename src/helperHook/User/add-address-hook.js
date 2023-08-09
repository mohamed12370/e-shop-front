import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { userCreateAddress } from '../../Redux/actions/userAddressAction';

export default function AddAddressHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userAddressReducer } = useSelector((state) => state);
  const { addUserAddress } = userAddressReducer;

  const [alias, setAlias] = useState('');
  const [detalis, setDetalis] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };

  const onChangeDetalis = (event) => {
    event.persist();
    setDetalis(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };

  const onSubmit = async () => {
    if (alias === '' || detalis === '' || phone === '') {
      toast.warn('من فضلك اكمل البيانات');
      return;
    }
    setLoading(true);
    setIsPress(true);
    await dispatch(
      userCreateAddress({
        alias,
        details: detalis,
        phone,
        city: '',
        postalCode: '',
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading && isPress) {
      //console.log(addUserAddress);
      if (addUserAddress && addUserAddress.status === 200) {
        toast.success(' تم اضافة العنوان بنجاح ');
        setTimeout(() => {
          setIsPress(false);
          navigate(`/user/addresses`);
        }, 2000);
      } else {
        toast.error(' هناك مشكلة فى اضافة عنوان يرجى المحاولة بعد قليل ');
      }
    }
  }, [addUserAddress, isPress, loading, navigate]);

  return {
    alias,
    detalis,
    phone,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    onSubmit,
  };
}
