import React from 'react';
import { Container } from 'react-bootstrap';
import ChoosePayMethoud from '../../Components/Checkout/ChoosePayMethoud';

export default function ChoosePayMethoudPage() {
  return (
    <div className="font" style={{ minHeight: '670px' }}>
      <Container>
        <ChoosePayMethoud />
      </Container>
    </div>
  );
}
