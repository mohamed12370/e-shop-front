import React from 'react';
import Slider from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brands/BrandFeatured';
import ViewHomeProductsHook from '../../helperHook/Products/view-home-products-hook';

export default function HomePage() {
  const { items } = ViewHomeProductsHook();

  return (
    <div className="font" style={{ minHeight: '670px' }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText={'/products'}
        products={items}
      />
      <DiscountSection />
      <CardProductsContainer
        title="احدث الازياء"
        btntitle="المزيد"
        pathText={'/products'}
        products={items}
      />
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
    </div>
  );
}
