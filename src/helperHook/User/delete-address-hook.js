import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteUserOneAddress,
  getUserAllAddress,
} from '../../Redux/actions/userAddressAction';

export default function DeleteAddressHook(id) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await dispatch(deleteUserOneAddress(id));
    await dispatch(getUserAllAddress());
  };

  return { show, handleClose, handleShow, handleDelete };
}
