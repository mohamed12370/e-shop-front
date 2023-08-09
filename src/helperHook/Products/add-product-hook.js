import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/categoryAction';
import { getAllBrand } from '../../Redux/actions/brandAction';
import { getOneSubCategory } from '../../Redux/actions/subcategoryAction';
import { toast } from 'react-toastify';
import { createProduct } from '../../Redux/actions/ProductAction';

export default function AdminAddProductHook() {
  const [images, setImages] = useState({});
  const [prodName, setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
  const [priceAfter, setPriceAfter] = useState('السعر بعد الخصم');
  const [qty, setQty] = useState('الكمية المتاحة');
  const [catId, setCatId] = useState('0');
  const [seletedSubId, setSeletedSubId] = useState([]);
  const [brandId, setBrandId] = useState('');
  const [showColor, setShowColor] = useState(false);
  const [colorArr, setColorArr] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { allCategory, allBrand, allSubcategory, allProducts } = useSelector(
    (state) => state
  );
  const { category } = allCategory;
  const { brand } = allBrand;
  const { subcategory } = allSubcategory;
  const { products } = allProducts;

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, [dispatch]);

  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100',
  };

  const onSelect = (selectedList) => {
    setSeletedSubId(selectedList);
  };
  const onRemove = (selectedList) => {
    setSeletedSubId(selectedList);
  };

  const handleChangeName = (e) => {
    setProdName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setProdDescription(e.target.value);
  };
  const handlePriceBefore = (e) => {
    setPriceBefore(e.target.value);
  };
  const handlePriceAfter = (e) => {
    setPriceAfter(e.target.value);
  };
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const onSelectCategory = async (e) => {
    if (e.target.value !== '0') {
      await dispatch(getOneSubCategory(e.target.value));
    }
    setCatId(e.target.value);
  };
  const onSelectBrand = (e) => {
    setBrandId(e.target.value);
  };
  const handleShowColor = () => {
    setShowColor(!showColor);
  };
  const handleChangeColorComplete = (e) => {
    setColorArr([...colorArr, e.hex]);
    setShowColor(!showColor);
  };
  const habdleRemoveColor = (item) => {
    setColorArr((prev) => prev.filter((color) => color !== item));
  };

  useEffect(() => {
    if (catId !== '0') {
      if (subcategory.data) {
        setOptions(subcategory.data);
      }
    }
  }, [catId, subcategory.data]);

  // to convert base64 image to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      prodName === '' ||
      prodDescription === '' ||
      Array.from(Object.keys(images)).length === 0 ||
      priceBefore === 0 ||
      catId === '0'
    ) {
      toast.warn('من فضلك اكمل باقى البيانات');
      return;
    }

    const formData = new FormData();
    const imgCover = dataURLtoFile(images[0], Math.random() + '.png');
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      async (_, index) =>
        await dataURLtoFile(images[index], Math.random() + '.png')
    );

    formData.append('title', prodName);
    formData.append('description', prodDescription);
    formData.append('quantity', qty);
    formData.append('price', priceBefore);
    formData.append('priceAfterDiscount', priceAfter);
    formData.append('imageCover', imgCover);
    formData.append('category', catId);
    formData.append('brand', brandId);
    colorArr.map((color) => formData.append('availableColors', color));
    seletedSubId.map((item) => formData.append('subcategory', item._id));
    itemImages.map((item) => formData.append('images', item));

    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setCatId('0');
      setColorArr([]);
      setImages({});
      setProdName('');
      setProdDescription('');
      setPriceBefore('السعر قبل الخصم');
      setPriceAfter('السعر بعد الخصم');
      setQty('الكمية المتاحة');
      setBrandId('0');
      setSeletedSubId([]);
      setInterval(setLoading(true), 1500);
      if (products.status === 201) toast.success('تم اضافة المنتج بنجاح');
      else toast.error('هناك مشكلة');
    }
  }, [loading, products]);

  return {
    prodName,
    prodDescription,
    priceAfter,
    priceBefore,
    images,
    setImages,
    colorArr,
    catId,
    brandId,
    seletedSubId,
    qty,
    showColor,
    options,
    loading,
    category,
    brand,
    crop,
    onSelect,
    onRemove,
    handleChangeName,
    handleChangeDescription,
    handlePriceBefore,
    handlePriceAfter,
    handleQty,
    onSelectCategory,
    onSelectBrand,
    handleShowColor,
    handleChangeColorComplete,
    habdleRemoveColor,
    handleSubmit,
  };
}
