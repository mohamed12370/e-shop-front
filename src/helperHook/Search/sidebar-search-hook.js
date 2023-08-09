import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/categoryAction';
import { getAllBrand } from '../../Redux/actions/brandAction';
import ViewSearchProdcutsHook from '../Products/view-search-prodcuts-hook';

export default function SidebarSearchHook() {
  const { getProducts } = ViewSearchProdcutsHook();

  const dispatch = useDispatch();
  const { allCategory, allBrand } = useSelector((state) => state);
  const { category } = allCategory;
  const { brand } = allBrand;

  const [catChecked, setCatChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);

  let queryCat;
  let queryBrand;

  useEffect(() => {
    const getCatAndBrand = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    getCatAndBrand();
  }, [dispatch]);

  let allCat = [];
  if (category?.data) allCat = category?.data;

  let allBrands = [];
  if (brand?.data) allBrands = brand?.data;

  const clickCategory = (e) => {
    let value = e.target.value;
    if (e.target.value === '0') {
      setCatChecked([]);
    } else {
      if (e.target.checked) {
        setCatChecked([...catChecked, value]);
      } else {
        setCatChecked((prev) => prev.filter((item) => item !== value));
      }
    }
  };

  useEffect(() => {
    queryCat = catChecked.map((val) => `category[in][]=${val}`).join('&');
    localStorage.setItem('catChecked', queryCat);
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [catChecked]);

  const clickBrand = (e) => {
    let value = e.target.value;
    if (e.target.value === '0') {
      setBrandChecked([]);
    } else {
      if (e.target.checked) {
        setBrandChecked([...brandChecked, value]);
      } else {
        setBrandChecked((prev) => prev.filter((item) => item !== value));
      }
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map((val) => `brand[in][]=${val}`).join('&');
    localStorage.setItem('brandChecked', queryBrand);
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [brandChecked]);

  const handlePriceFrom = (e) => {
    localStorage.setItem('priceFrom', e.target.value);
    setPriceFrom(e.target.value);
  };

  const handlePriceTo = (e) => {
    localStorage.setItem('priceTo', e.target.value);
    setPriceTo(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [priceFrom, priceTo, getProducts]);

  return {
    allCat,
    allBrands,
    clickCategory,
    clickBrand,
    handlePriceFrom,
    handlePriceTo,
  };
}
