import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOneOrder } from '../../Redux/actions/ordersAcrion';

export default function GetOrderDetailsHook(id) {
  const dicpatch = useDispatch();
  const { orderReducer } = useSelector((state) => state);
  const { userOneOrder } = orderReducer;
  // console.log(userOneOrder);

  const [userOrderDetails, setUserOrderDetails] = useState([]);
  const [userCartItems, setUserCartItems] = useState([]);

  useEffect(() => {
    dicpatch(getUserOneOrder(id));
  }, [dicpatch, id]);

  useEffect(() => {
    if (userOneOrder?.data) setUserOrderDetails(userOneOrder?.data);
    else setUserOrderDetails([]);

    if (userOneOrder?.data?.cartItems)
      setUserCartItems(userOneOrder?.data?.cartItems);
    else setUserCartItems([]);
  }, [userOneOrder]);

  return { userOrderDetails, userCartItems };
}
