import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../Redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

export default function RegisterHook() {
  const dispatch = useDispatch();
  const { authReducer } = useSelector((state) => state);
  const { createUser } = authReducer;

  const navigate = useNavigate();

  const passRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const ShoePassword = () => {
    if (passRef.current.type === 'password') passRef.current.type = 'text';
    else passRef.current.type = 'password';
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValue = () => {
    if (name === '') return toast.warn(' من فضلك ادخل اسم المستخدم ');
    if (phone.length <= 10) return toast.warn(' من فضلك ادخل رقم هاتف صحيح  ');
    if (password !== confirmPassword)
      return toast.warn(' تاكد من كلمة المرور ');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validationValue();

    setLoading(true);
    await dispatch(
      createNewUser({
        name,
        email,
        phone,
        password,
        passwordConfirm: confirmPassword,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      //if (createUser) console.log(createUser);
      if (createUser?.data?.token) {
        localStorage.setItem('token', createUser?.data?.token);
        toast.success(' تم تسجيل الحساب بنجاح ');
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setTimeout(() => {
          setLoading(true);
          navigate(`/login`);
        }, 2000);
      }
      if (createUser.data.errors) {
        if (createUser.data.errors[0].msg === 'E-mail already in use')
          toast.error(createUser.data.errors[0].msg);
        if (createUser.data.errors[0].msg === 'accept only egypt phone numbers')
          toast.error(createUser.data.errors[0].msg);
        if (createUser.data.errors[0].msg === 'must be at least 6 chars')
          toast.error(`the password ${createUser.data.errors[0].msg}`);
      }
    }
  }, [loading, createUser, navigate]);

  return {
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleSubmit,
    passRef,
    ShoePassword,
  };
}
