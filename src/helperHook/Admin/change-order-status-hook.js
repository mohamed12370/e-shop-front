import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeOrderPay,
  changeOrderdeliver,
  getUserOneOrder,
} from '../../Redux/actions/ordersAcrion';
import { toast } from 'react-toastify';

export default function ChangeOrderStatusHook(id) {
  const dicpatch = useDispatch();
  const { orderReducer } = useSelector((state) => state);
  const { oderPayStatus, oderDeliverStatus } = orderReducer;

  const [pay, setPay] = useState('0');
  const [lodingPay, setLodingPay] = useState(false);
  const [isPressPay, setIsPressPay] = useState(false);
  const [deliver, setDeliver] = useState('0');
  const [lodingDeliver, setLodingDeliver] = useState(false);
  const [isPressDeliver, setIsPressDeliver] = useState(false);

  const hnadleChangePay = async (e) => {
    setPay(e.target.value);
  };

  const onClickToChangePay = async () => {
    if (pay !== '0' || pay === 0) {
      setIsPressPay(true);
      setLodingPay(true);
      await dicpatch(changeOrderPay(id));
      setLodingPay(false);
    } else {
      toast.warn(' please choice pay status ');
    }
  };

  useEffect(() => {
    if (!lodingPay && isPressPay) {
      // console.log(oderPayStatus);
      if (oderPayStatus?.status === 200) {
        toast.success('Success');
        setIsPressPay(false);
        dicpatch(getUserOneOrder(id));
      }
    }
  }, [dicpatch, id, isPressPay, lodingPay, oderPayStatus]);

  const hnadleChangedeliver = (e) => {
    setDeliver(e.target.value);
  };

  const onClickToChangedeliver = async () => {
    if (deliver !== '0' || deliver === 0) {
      setIsPressDeliver(true);
      setLodingDeliver(true);
      await dicpatch(changeOrderdeliver(id));
      setLodingDeliver(false);
    } else {
      toast.warn(' please choice pay status ');
    }
  };

  useEffect(() => {
    if (!lodingDeliver && isPressDeliver) {
      // console.log(oderDeliverStatus);
      if (oderDeliverStatus?.status === 200) {
        toast.success('Success');
        setIsPressDeliver(false);
        dicpatch(getUserOneOrder(id));
      }
    }
  }, [dicpatch, id, isPressDeliver, lodingDeliver, oderDeliverStatus]);

  return {
    pay,
    deliver,
    hnadleChangePay,
    onClickToChangePay,
    hnadleChangedeliver,
    onClickToChangedeliver,
  };
}
