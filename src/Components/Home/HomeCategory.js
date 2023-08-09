import React, { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTitle from '../Uitily/SubTitle';
import CategoryCard from '../Category/CategoryCard';
//import HomeCategoryHook from '../../helperHook/Category/home-category-hook';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/categoryAction';

export default function HomeCategory() {
  // const [loading, category, colors] = HomeCategoryHook();
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state);
  const { category, loading } = allCategory;
  //console.log(category.data, loading);

  const colors = [
    '#FFD3E8',
    '#F4DBA5',
    '#55CFDF',
    '#FF6262',
    '#0034FF',
    '#FFD3E8',
  ];

  useEffect(() => {
    dispatch(getAllCategory(5));
  }, [dispatch]);

  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText={'/allcategory'} />
      <Row className="my-2 d-flex justify-content-between">
        {!loading ? (
          category?.data?.length ? (
            category.data
              .slice(0, 5)
              .map((item, index) => (
                <CategoryCard
                  key={item._id}
                  id={item._id}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                />
              ))
          ) : (
            <h4 className="text-center text-danger">لا يوجد تصنيفات</h4>
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
