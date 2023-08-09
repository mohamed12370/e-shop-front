import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllOrdersItem from './AdminAllOrdersItem';
import AllOrdersHook from '../../helperHook/User/all-orders-hook';
import Pagination from '../Uitily/Pagination';

export default function AdminAllOrders() {
  const { onPress, userOrders, pagination } = AllOrdersHook();
  //console.log(userOrders);

  return (
    <div>
      <div className="admin-content-text mb-3">ادارة جميع الطلبات</div>
      <Row className="justify-content-start">
        {userOrders?.length ? (
          userOrders?.map((order) => (
            <AdminAllOrdersItem key={order._id} orderItems={order} />
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
    </div>
  );
}
