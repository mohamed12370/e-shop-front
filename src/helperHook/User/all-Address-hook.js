import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAllAddress } from '../../Redux/actions/userAddressAction';

export default function AllAddressHook() {
  const dispatch = useDispatch();
  const { userAddressReducer } = useSelector((state) => state);
  const { allAddressUser } = userAddressReducer;
  // console.log(allAddressUser);

  const [userAllAddress, setUserAllAddress] = useState([]);

  useEffect(() => {
    dispatch(getUserAllAddress());
  }, [dispatch]);

  useEffect(() => {
    if (allAddressUser?.status === 'success' && allAddressUser?.data) {
      setUserAllAddress(allAddressUser.data);
    }
  }, [allAddressUser]);

  return { userAllAddress };
}
