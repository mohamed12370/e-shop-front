import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AllInCartHook from '../Cart/all-in-cart-hook';
import { toast } from 'react-toastify';
import { createNewOrderCash } from '../../Redux/actions/checkoutAction';

export default function OrderPaymentCashHook() {
  const { cartId } = AllInCartHook();
  // console.log(cartId);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { checkoutReducer } = useSelector((state) => state);
  const { addOrderCash } = checkoutReducer;
  //console.log(addOrderCash);

  const [userAddress, setUserAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const handleChangeAddress = async (e) => {
    //console.log(e.target.options[e.target.selectedIndex].value);
    if (
      e.target.options[e.target.selectedIndex].value !== '0' ||
      e.target.options[e.target.selectedIndex].value !== 0
    ) {
      const convertUserAddress = JSON.parse(
        e.target.options[e.target.selectedIndex].dataset.addressdetails
      );
      setUserAddress(convertUserAddress);
    }
  };

  const handleOrderCash = async () => {
    if (cartId === '0') {
      return toast.warn('add some products to shopping cart first');
    }
    if (userAddress.length <= 0) {
      return toast.warn('please choise address');
    }

    setIsPress(true);
    setLoading(true);
    await dispatch(
      createNewOrderCash(cartId, {
        shippingAddress: {
          details: userAddress.alias,
          phone: userAddress.phone,
          city: '',
          postalCode: '',
        },
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading && isPress) {
      //console.log(addOrderCash);
      if (addOrderCash?.status === 201) {
        toast.success('Succsee');
        setTimeout(() => {
          setIsPress(false);
          navigate('/user/allorders');
        }, 2000);
      } else {
        toast.error('try again later time');
        setIsPress(false);
      }
    }
  }, [addOrderCash, isPress, loading, navigate]);

  return { handleChangeAddress, userAddress, handleOrderCash };
}
