import React from 'react';
import { Row } from 'react-bootstrap';
import UserAllOrderItem from './UserAllOrderItem';
import AllOrdersHook from '../../helperHook/User/all-orders-hook';
import Pagination from '../Uitily/Pagination';

export default function UserAllOrder() {
  const { onPress, userOrders, result, pagination } = AllOrdersHook();
  //console.log(userOrders);

  return (
    <>
      <div className="admin-content-text pb-4">count orders is ({result})</div>
      <Row className="justify-content-between">
        {userOrders?.length ? (
          userOrders?.map((order) => (
            <UserAllOrderItem key={order._id} orderItems={order} />
          ))
        ) : (
          <h2>no order here</h2>
        )}

        {pagination?.numberOfPages >= 2 ? (
          <Pagination
            pageCount={pagination?.numberOfPages || 0}
            onPress={onPress}
          />
        ) : null}
      </Row>
    </>
  );
}
