import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAllOrders } from '../../Redux/actions/ordersAcrion';

export default function AllOrdersHook() {
  const dispatch = useDispatch();
  const { orderReducer } = useSelector((state) => state);
  const { allOrdersUser } = orderReducer;
  //console.log(allOrdersUser);

  const [userData, setUserData] = useState('');
  const [userOrders, setUserOrders] = useState([]);
  const [result, setResult] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setUserData(userData);
    } else {
      setUserData('');
    }
  }, []);

  useEffect(() => {
    dispatch(getUserAllOrders(3));
  }, [dispatch]);

  useEffect(() => {
    if (allOrdersUser?.data) setUserOrders(allOrdersUser?.data);
    else setUserOrders([]);

    if (allOrdersUser?.results) setResult(allOrdersUser?.results);
    else setResult(0);

    if (allOrdersUser?.paginationResult)
      setPagination(allOrdersUser?.paginationResult);
    else setPagination({});
  }, [allOrdersUser]);

  const onPress = async (page) => {
    await dispatch(getUserAllOrders(3, page));
  };

  return { userData, userOrders, result, pagination, onPress };
}
