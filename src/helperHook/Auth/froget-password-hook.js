import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { userForgetPassword } from '../../Redux/actions/authAction';
// import { useNavigate } from 'react-router-dom';

export default function FrogetPasswordHook() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIspress] = useState(false);

  //   const navigate = useNavigate;
  //   const dispatch = useDispatch();
  //   const { authReducer } = useSelector((state) => state);
  //   const { forgetPassword } = authReducer;
  //   console.log(forgetPassword);

  const handleChnageEmail = (e) => {
    // localStorage.setItem('user-email', e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (email === '') return toast.warn(' ادخل الايمل ');

    setLoading(true);
    setIspress(true);
    //await dispatch(userForgetPassword({ email }));
    setTimeout(() => {
      toast.info(' هناك مشكلة فى ارسال الكود يرجى المحاولة بعد قليل ');
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (isPress && !loading) {
    }
  }, [isPress, loading]);

  return { email, loading, handleChnageEmail, handleSubmit };
}
