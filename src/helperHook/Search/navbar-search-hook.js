import { useEffect, useState } from 'react';
import ViewSearchProdcutsHook from '../Products/view-search-prodcuts-hook';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER } from '../../Redux/type';

export default function NavbarSearchHook() {
  const navigate = useNavigate();
  const { getProducts } = ViewSearchProdcutsHook();

  const [searchWord, setSearchWord] = useState('');
  const [userData, setUserData] = useState();

  const dispatch = useDispatch();
  const { authReducer } = useSelector((state) => state);
  const { loginUser } = authReducer;
  //console.log(loginUser);

  const handleChangeSearch = (e) => {
    localStorage.setItem('searchWord', e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== '/products') navigate('/products');
  };

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    dispatch({
      type: LOGOUT_USER,
      payload: [],
    });
    navigate('/');
  };

  useEffect(() => {
    if (loginUser.data) {
      setUserData(loginUser.data?.data);
    } else {
      setUserData(loginUser);
    }
  }, [loginUser]);

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [getProducts, navigate, searchWord]);

  return { handleChangeSearch, logOut, userData };
}
