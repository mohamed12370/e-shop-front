import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../../Redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

export default function LoginHook() {
  const dispatch = useDispatch();
  const { authReducer } = useSelector((state) => state);
  const { loginUser: user } = authReducer;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIspress] = useState(false);

  const handleChnageEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChnagePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (email === '') return toast.warn('please enter your email');
    if (password === '') return toast.warn('please enter your password');
    if (password.length < 6)
      return toast.warn('the password must be at least 6 char');

    setLoading(true);
    setIspress(true);
    await dispatch(loginUser({ email, password }));
    setLoading(false);
  };

  useEffect(() => {
    //if (user) console.log(user);

    if (isPress && !loading) {
      if (user.status === 200) {
        localStorage.setItem('token', user.data.token);
        localStorage.setItem('userData', JSON.stringify(user.data.data));
        toast.success(`Welcome back ${user.data.data.name}`);
        setIspress(false);
        setTimeout(() => {
          navigate('/');
          window.location.reload(false);
        }, 2000);
      }
      if (user.status === 400) {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        toast.error(user?.data?.errors[0]?.msg);
        setIspress(false);
      }
      if (user.status === 500) {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        toast.error(user?.data?.message);
        setIspress(false);
      }
    }
  }, [user, isPress, loading, navigate]);

  return {
    email,
    password,
    handleChnageEmail,
    handleChnagePassword,
    handleSubmit,
    loading,
  };
}
