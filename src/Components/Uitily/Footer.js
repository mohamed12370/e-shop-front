import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../Images/facebook.png';
import instagram from '../../Images/instagram.png';
import twitter from '../../Images/twitter.png';
import phone from '../../Images/phone.png';

export default function Footer() {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: '50px' }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shroot ">الشروط والاحكام</div>
            <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
            <div className="footer-shroot mx-2">اتصل بنا</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="" />
              <p className="footer-phone"> 01226571893 (20+)</p>
            </div>
            <div style={{ cursor: 'pointer' }}>
              <img width="20px" height="20px" src={facebook} alt="" />
            </div>
            <div style={{ cursor: 'pointer' }} className="">
              <img width="20px" height="20px" src={instagram} alt="" />
            </div>
            <div style={{ cursor: 'pointer' }} className="">
              <img width="20px" height="20px" src={twitter} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
