import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetails from '../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../helperHook/Products/view-product-details-hook';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { prodLike, item } = ViewProductDetailsHook(id);
  //console.log(prodLike);

  try {
    if (item) {
      var rateAvg = item.ratingsAverage;
      var rateQty = item.ratingsQuantity;
    }
  } catch (error) {}

  return (
    <div className="font" style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <CardProductsContainer title="منتجات قد تعجبك" products={prodLike} />
      </Container>
    </div>
  );
}
