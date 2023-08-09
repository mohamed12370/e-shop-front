import React, { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTitle from '../Uitily/SubTitle';
import BrandCard from './BrandCard';
//import brand1 from '../../Images/brand1.png';
//import HomeBrandHook from '../../helperHook/Brand/home-brand-hook';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../Redux/actions/brandAction';

export default function BrandFeatured({ title, btntitle }) {
  //const [loading, brand] = HomeBrandHook();
  const dispatch = useDispatch();
  const { allBrand } = useSelector((state) => state);
  const { brand, loading } = allBrand;
  //console.log(brand.data, loading);

  useEffect(() => {
    dispatch(getAllBrand(5));
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <SubTitle title={title} btntitle={btntitle} pathText={'/allbrand'} />
      <Row className="my-1 d-flex justify-content-between">
        {!loading ? (
          brand?.data?.length ? (
            brand.data
              .slice(0, 5)
              .map((item) => (
                <BrandCard key={item._id} img={item.image} id={item._id} />
              ))
          ) : (
            <h4 className="text-center text-danger">لا يوجد ماركات</h4>
          )
        ) : (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </Row>
    </Container>
  );
}
