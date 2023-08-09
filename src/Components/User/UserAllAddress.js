import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';
import AllAddressHook from '../../helperHook/User/all-Address-hook';

export default function UserAllAddress() {
  const { userAllAddress } = AllAddressHook();

  return (
    <>
      <div className="admin-content-text pb-4">دفتر العنوانين</div>
      {userAllAddress.length ? (
        userAllAddress?.map((address) => (
          <UserAddressCard key={address._id} address={address} />
        ))
      ) : (
        <h3> ليس هناك عنوان </h3>
      )}

      <Row className="justify-content-center">
        <Col className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: 'none' }}>
            <button className="btn-add-address">اضافه عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
