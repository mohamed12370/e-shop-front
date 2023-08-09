import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyPasseordCode } from '../../Redux/actions/authAction';

export default function VerifyPasswordHook() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIspress] = useState(false);

  const navigate = useNavigate;
  const dispatch = useDispatch();
  const { authReducer } = useSelector((state) => state);
  const { verifyPassword } = authReducer;
  // console.log(verifyPassword);

  const handleChnageCode = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async () => {
    if (code === '') return toast.warn(' ادخل الكود ');

    setLoading(true);
    setIspress(true);
    await dispatch(verifyPasseordCode({ resetCode: code }));
    setLoading(false);
  };

  useEffect(() => {
    if (isPress && !loading) {
      if (verifyPassword.status === 200) {
        toast.success(' كود التفعيل صحيح ');
        setTimeout(() => {
          navigate(`/user/reset-password`);
        }, 2000);
      } else {
        toast.error(verifyPassword?.data?.message);
      }
    }
  }, [isPress, loading, navigate, verifyPassword]);

  return { code, handleChnageCode, loading, handleSubmit };
}
