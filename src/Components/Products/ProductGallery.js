import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../helperHook/Products/view-product-details-hook';

export default function ProductGallery() {
  const { id } = useParams();
  const { images } = ViewProductDetailsHook(id);

  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2 "
      style={{ width: '95%', margin: '0 auto' }}
    >
      <ImageGallery
        additionalClass="w-100"
        items={images}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
}
