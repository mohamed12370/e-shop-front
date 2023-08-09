import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserOneAddress,
  updateUserOneAddress,
} from '../../Redux/actions/userAddressAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function EditAddressHook(id) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userAddressReducer } = useSelector((state) => state);
  const { oneAddressUser, editAddressUser } = userAddressReducer;
  // console.log(editAddressUser);

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

  useEffect(() => {
    dispatch(getUserOneAddress(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (oneAddressUser) {
      if (oneAddressUser.status === 'success' && oneAddressUser.data) {
        setAlias(oneAddressUser.data.alias);
        setDetalis(oneAddressUser.data.details);
        setPhone(oneAddressUser.data.phone);
      }
    }
  }, [oneAddressUser]);

  const handleSubmit = async () => {
    if (alias === '' || detalis === '' || phone === '') {
      return toast.warn(' من فضلك اكمل البيانات ');
    }

    setLoading(true);
    setIsPress(true);
    await dispatch(
      updateUserOneAddress(id, {
        alias,
        details: detalis,
        phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading && isPress) {
      if (editAddressUser && editAddressUser.status === 200) {
        toast.success(' تم تعديل البيانات بنجاح ');
        setTimeout(() => {
          navigate(`/user/addresses`);
        }, 2000);
      }
    }
  }, [editAddressUser, isPress, loading, navigate]);

  return {
    alias,
    detalis,
    phone,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    handleSubmit,
  };
}
