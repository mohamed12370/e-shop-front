import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Uitily/SubTitle';
import ProductCard from './ProductCard';
import CardContainerHook from '../../helperHook/wishList/card-container-hook';

export default function CardProductsContainer({
  title,
  btntitle,
  pathText,
  products,
}) {
  const { favProdUser } = CardContainerHook();

  return (
    <Container className="mt-4">
      {products?.length ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}

      <Row className="my-2 d-flex justify-content-between">
        {products?.length
          ? products.map((item, index) => (
              <ProductCard key={index} item={item} favProdUser={favProdUser} />
            ))
          : null}
      </Row>
    </Container>
  );
}
