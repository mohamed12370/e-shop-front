import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllInCartHook from '../Cart/all-in-cart-hook';
import { toast } from 'react-toastify';
import { createNewOrderCard } from '../../Redux/actions/checkoutAction';

export default function OrderPayCardHook(userAddress) {
  const { cartId } = AllInCartHook();

  const dispatch = useDispatch();
  const { checkoutReducer } = useSelector((state) => state);
  const { addOrderCard } = checkoutReducer;

  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const handleOrderCard = async () => {
    if (cartId === '0') {
      return toast.warn('add some products to shopping cart first');
    }
    if (userAddress.length <= 0) {
      return toast.warn('please choise address');
    }

    setIsPress(true);
    setLoading(true);
    await dispatch(
      createNewOrderCard(cartId, {
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
      //console.log(addOrderCard);
      if (addOrderCard?.status === 'success') {
        if (addOrderCard.session.url) {
          window.open(addOrderCard.session.url);
          setIsPress(false);
        }
      } else {
        toast.error('try again later time');
        setIsPress(false);
      }
    }
  }, [isPress, loading, addOrderCard]);

  return { handleOrderCard };
}
