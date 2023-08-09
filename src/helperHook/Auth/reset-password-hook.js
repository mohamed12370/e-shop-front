import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userResetPassword } from '../../Redux/actions/authAction';

export default function ResetPasswordHook() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIspress] = useState(false);

  const navigate = useNavigate;
  const dispatch = useDispatch();
  const { authReducer } = useSelector((state) => state);
  const { ResetPassword } = authReducer;
  //console.log(ResetPassword);

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (password === '') return toast.warn(' ادخل كملمة المرور ');
    if (confirmPassword === '') return toast.warn(' تاكيد كلمة المرور ');
    if (password !== confirmPassword)
      return toast.warn(' يجب ان تكون كلمة المرور مساوية لتاكيد كلمة المرور ');

    setLoading(true);
    setIspress(true);
    await dispatch(
      userResetPassword({
        email: 'mohamedmostafa12370@gmail.com',
        newPassword: password,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (isPress && !loading) {
      if (ResetPassword.status === 200) {
        toast.success(' تم تغير كلمة المرور بنجاح ');
        setTimeout(() => {
          navigate(`/login`);
        }, 2000);
      } else {
        toast.error(ResetPassword?.data?.message);
      }
    }
  }, [isPress, loading, navigate, ResetPassword]);

  return {
    password,
    confirmPassword,
    handleChangePassword,
    handleChangeConfirmPassword,
    loading,
    handleSubmit,
  };
}
