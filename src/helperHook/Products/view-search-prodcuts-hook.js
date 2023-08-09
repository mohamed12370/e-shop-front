import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsSearch } from '../../Redux/actions/ProductAction';

export default function ViewSearchProdcutsHook() {
  let limit = 4;

  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state);
  const { allProducts: products } = allProducts;

  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [result, setResult] = useState(0);

  const sortData = useCallback(() => {
    let sortWord = '';

    if (localStorage.getItem('sortType') === ' بدون ترتيب ') {
      return (sortWord = '');
    } else if (localStorage.getItem('sortType') === ' الاكثر مبيعا ') {
      return (sortWord = '-sold');
    } else if (localStorage.getItem('sortType') === ' الاعلي تقييما ') {
      return (sortWord = '-ratingsQuantity');
    } else if (localStorage.getItem('sortType') === ' السعر من الاقل للاعلي ') {
      return (sortWord = '+price');
    } else if (localStorage.getItem('sortType') === ' السعر من الاعلي للاقل ') {
      return (sortWord = '-price');
    } else {
      return sortWord;
    }
  }, []);

  const getStorage = () => {
    let priceFromString = '',
      priceToString = '';
    let word = localStorage.getItem('searchWord')
      ? localStorage.getItem('searchWord')
      : '';
    let queryCat = localStorage.getItem('catChecked')
      ? localStorage.getItem('catChecked')
      : '';
    let queryBrand = localStorage.getItem('brandChecked')
      ? localStorage.getItem('brandChecked')
      : '';
    let priceFrom = localStorage.getItem('priceFrom')
      ? localStorage.getItem('priceFrom')
      : '';
    let priceTo = localStorage.getItem('priceTo')
      ? localStorage.getItem('priceTo')
      : '';

    if (priceFrom === '' || priceFrom <= 0) priceFromString = '';
    else priceFromString = `&price[gt]=${priceFrom}`;
    if (priceTo === '' || priceTo <= 0) priceToString = '';
    else priceToString = `&price[lte]=${priceTo}`;

    return { word, queryCat, queryBrand, priceFromString, priceToString };
  };

  const onPress = async (page) => {
    const { word, queryCat, queryBrand, priceFromString, priceToString } =
      getStorage();
    const sortWord = sortData();

    await dispatch(
      getAllProductsSearch(
        `limit=${limit}&keyword=${word}&page=${page}&sort=${sortWord}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };

  const getProducts = useCallback(async () => {
    const { word, queryCat, queryBrand, priceFromString, priceToString } =
      getStorage();
    const sortWord = sortData();

    await dispatch(
      getAllProductsSearch(
        `limit=${limit}&keyword=${word}&sort=${sortWord}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  }, [dispatch, limit, sortData]);

  useEffect(() => {
    if (products === undefined) {
      setItems([]);
      setPageCount(0);
    } else if (products.data) {
      setItems(products.data);
      setPageCount([products.paginationResult.numberOfPages]);
      setResult(products.results);
    }
  }, [products]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { items, onPress, pageCount, getProducts, result };
}
