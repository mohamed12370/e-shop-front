import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import rate from '../../Images/rate.png';
import Pagination from '../Uitily/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import { useParams } from 'react-router-dom';
import ViewAllReviewHook from '../../helperHook/Review/view-all-review-hook';

export default function RateContainer({ rateAvg, rateQty }) {
  const { id } = useParams();
  const { allReviewProd, onPress } = ViewAllReviewHook(id);

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2"> {rateAvg || 0} </div>
          <div className="rate-count d-inline p-1 pt-2">({rateQty} تقييم)</div>
        </Col>
      </Row>

      <RatePost />

      {allReviewProd?.data && allReviewProd?.data?.length ? (
        allReviewProd?.data.map((item) => (
          <RateItem key={item._id} item={item} prodId={id} />
        ))
      ) : (
        <h6 className="text-center py-2 fw-bold"> لا توجد تقيمات </h6>
      )}

      {allReviewProd?.paginationResult &&
      allReviewProd?.paginationResult?.numberOfPages >= 2 ? (
        <Pagination
          pageCount={allReviewProd.paginationResult.numberOfPages}
          onPress={onPress}
        />
      ) : null}
    </Container>
  );
}
