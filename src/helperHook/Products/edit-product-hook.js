import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllCategory } from '../../Redux/actions/categoryAction';
import { getAllBrand } from '../../Redux/actions/brandAction';
import {
  getOneProduct,
  updateProduct,
} from '../../Redux/actions/ProductAction';
import { getOneSubCategory } from '../../Redux/actions/subcategoryAction';

export default function EditProductHook(id) {
  const [images, setImages] = useState([]);
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
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();
  const { allCategory, allBrand, allSubcategory, allProducts } = useSelector(
    (state) => state
  );
  const { category } = allCategory;
  const { brand } = allBrand;
  const { subcategory } = allSubcategory;
  const { updateProd, oneProduct: item } = allProducts;
  // console.log(updateProd);

  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    run();
  }, [dispatch, id]);

  useEffect(() => {
    if (item?.data) {
      setProdName(item.data.title);
      setProdDescription(item.data.description);
      setPriceBefore(item.data.price);
      setPriceAfter(item.data.priceAfterDiscount);
      setQty(item.data.quantity);
      setCatId(item.data.category);
      setBrandId(item.data.brand);
      setColorArr(item.data.availableColors);
      setImages(item.data.images);
    }
  }, [item]);

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
    if (catId !== 0 || catId !== '0') {
      const run = async () => {
        await dispatch(getOneSubCategory(catId));
      };
      run();
    }
  }, [catId, dispatch]);

  useEffect(() => {
    if (subcategory) {
      //console.log(options);
      setOptions(subcategory.data);
    }
  }, [options, subcategory]);

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

  //convert image url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.blob();
    const ext = url.split('.').pop();
    const filename = url.split('/').pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

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

    let imgCover;
    let itemImages = [];
    if (images[0].length <= 300) {
      imgCover = await convertURLtoFile(images[0]);
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + '.png');
    }

    const formData = new FormData();
    Array.from(Array(Object.keys(images).length).keys()).map(
      async (_, index) => {
        if (images[index].length <= 300) {
          const res = await convertURLtoFile(images[index]);
          itemImages.push(res);
        } else {
          itemImages.push(dataURLtoFile(images[index], Math.random() + '.png'));
        }
      }
    );
    // console.log(imgCover);

    formData.append('title', prodName);
    formData.append('description', prodDescription);
    formData.append('quantity', qty);
    formData.append('price', priceBefore);
    formData.append('priceAfterDiscount', priceAfter);
    formData.append('category', catId);
    formData.append('brand', brandId);
    colorArr.map((color) => formData.append('availableColors', color));
    seletedSubId.map((item) => formData.append('subcategory', item._id));
    setTimeout(() => {
      formData.append('imageCover', imgCover);
      itemImages.map((item) => formData.append('images', item));
    }, 1000);

    setTimeout(async () => {
      setLoading(true);
      setIsPress(true);
      await dispatch(updateProduct(id, formData));
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (!loading && isPress) {
      console.log(updateProd);
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
      if (updateProd?.status && updateProd?.status === 200)
        toast.success('تم تعديل المنتج بنجاح');
      else toast.error('هناك مشكلة');
    }
  }, [isPress, loading, updateProd]);

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
