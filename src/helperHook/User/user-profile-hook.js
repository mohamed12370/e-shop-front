import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  updateUserPassword,
  updateUserProfileData,
} from '../../Redux/actions/authAction';

export default function UserProfileHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authReducer } = useSelector((state) => state);
  const { editUserProfile, editUserPassword } = authReducer;

  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confNewPass, setConfNewPass] = useState('');
  const [loadingPass, setLoadingPass] = useState(false);
  const [isPressPass, setIsPressPass] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeName = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    event.persist();
    setEmail(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };

  const onChangeOldPass = (e) => {
    e.persist();
    setOldPass(e.target.value);
  };

  const onChangeNewPass = (e) => {
    e.persist();
    setNewPass(e.target.value);
  };

  const onChangeConfNewPass = (e) => {
    e.persist();
    setConfNewPass(e.target.value);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    //console.log(userData);
    if (userData) {
      setName(userData.name);
      setPhone(userData.phone);
      setEmail(userData.email);
    }
  }, []);

  const handelSubmit = async () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    let body;
    if (name === '' || email === '' || phone === '') {
      return toast.warn(' من فضلك اكمل البيانات ');
    }

    if (userData?.email === email)
      body = {
        name,
        phone,
      };
    else
      body = {
        name,
        email,
        phone,
      };

    setLoading(true);
    setIsPress(true);
    await dispatch(updateUserProfileData(body));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading && isPress) {
      //console.log(editUserProfile);
      if (editUserProfile && editUserProfile.status === 200) {
        toast.success(' Success ');
        localStorage.setItem(
          'userData',
          JSON.stringify(editUserProfile?.data?.data?.user)
        );
        const userData = JSON.parse(localStorage.getItem('userData'));
        setName(userData.name);
        setPhone(userData.phone);
        setEmail(userData.email);

        handleClose();
        setIsPress(false);
      } else {
        toast.error(' هناك مشكلة يرجى المحاولة بعد قليل ');
      }
    }
  }, [editUserProfile, isPress, loading]);

  const handleSubmitPass = async () => {
    if (oldPass === '' || newPass === '' || confNewPass === '') {
      return toast.warn('plz complete data');
    }
    if (newPass !== confNewPass) {
      return toast.warn(
        ' the new password must be equle confirm new password '
      );
    }

    setLoadingPass(true);
    setIsPressPass(true);
    await dispatch(
      updateUserPassword({
        currentPassword: oldPass,
        password: newPass,
        passwordConfirm: confNewPass,
      })
    );
    setLoadingPass(false);
  };

  useEffect(() => {
    if (!loadingPass && isPressPass) {
      //console.log(editUserPassword);
      if (editUserPassword && editUserPassword.status === 200) {
        toast.success('Success');
        setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userData');
          navigate('/login');
          setOldPass('');
          setNewPass('');
          setConfNewPass('');
          setIsPressPass(false);
        }, 1500);
      } else {
        toast.error('falid try agin at later time');
      }
    }
  }, [editUserPassword, isPressPass, loadingPass, navigate]);

  return {
    show,
    name,
    phone,
    email,
    oldPass,
    newPass,
    confNewPass,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    handleClose,
    handleShow,
    handelSubmit,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfNewPass,
    handleSubmitPass,
  };
}
