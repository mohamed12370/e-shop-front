import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import SearchCountResult from '../../Components/Uitily/SearchCountResult';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Pagination from '../../Components/Uitily/Pagination';
import { Col, Container, Row } from 'react-bootstrap';
import SideFilter from '../../Components/Uitily/SideFilter';
import ViewSearchProdcutsHook from '../../helperHook/Products/view-search-prodcuts-hook';

export default function ShopProductsPage() {
  const { items, pageCount, onPress, result, getProducts } =
    ViewSearchProdcutsHook();

  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          title={`${result} نتجية بحث`}
          onClick={getProducts}
        />
        <Row className="d-flex flex-row">
          <Col sm="4" xs="4" md="2" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="8" xs="8" md="10">
            <CardProductsContainer products={items} title={''} btntitle={''} />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={onPress} />
        ) : null}
      </Container>
    </div>
  );
}
