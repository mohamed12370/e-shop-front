import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductInCart } from '../../Redux/actions/cartAction';

export default function AllInCartHook() {
  const dispatch = useDispatch();
  const { cartReducer } = useSelector((state) => state);
  const { userAllCart } = cartReducer;

  const [cartId, setCartId] = useState('0');
  const [allProductCart, setAllProductCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);
  const [couponNameDiscount, setCouponNameDiscount] = useState('');

  useEffect(() => {
    dispatch(getAllProductInCart());
  }, [dispatch]);

  useEffect(() => {
    if (userAllCart?.status === 'success') {
      //console.log(userAllCart);
      setAllProductCart(userAllCart?.numOfCartItems);
      setCartItems(userAllCart?.data?.products);
      setTotalPrice(userAllCart?.data?.totalCartPrice);
      setCartId(userAllCart?.data?._id);

      if (userAllCart?.data?.coupon)
        setCouponNameDiscount(userAllCart?.data?.coupon);
      else setCouponNameDiscount(0);

      if (userAllCart?.data?.totalAfterDiscount)
        setTotalPriceAfterDiscount(userAllCart?.data?.totalAfterDiscount);
      else setTotalPriceAfterDiscount(0);
    } else {
      setCartId('0');
      setAllProductCart(0);
      setCartItems([]);
      setTotalPrice(0);
    }
  }, [userAllCart]);

  return {
    allProductCart,
    cartItems,
    totalPrice,
    totalPriceAfterDiscount,
    couponNameDiscount,
    cartId,
  };
}
