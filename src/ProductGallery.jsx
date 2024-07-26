import React, { useState, useEffect } from 'react';
import '@picocss/pico/css/pico.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';
import styles from './ProductGallery.module.css';

const images = [
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
  { src: 'images/lakeview-elegance.png', title: 'Lakeview Elegance' },
];

const imagesPerPage = 4;

const ProductGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const renderGallery = () => {
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    return images.slice(start, end).map((image, index) => (
      <figure key={index} className={styles.card}>
        <a href={image.src} data-lightbox="gallery" data-title={image.title}>
          <img src={image.src} alt={`${image.title} preview`} />
        </a>
      </figure>
    ));
  };

  const renderPagination = () => {
    const pageCount = Math.ceil(images.length / imagesPerPage);
    return Array.from({ length: pageCount }, (_, i) => (
      <a
        href="#"
        key={i}
        className={currentPage === i + 1 ? styles.active : ''}
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage(i + 1);
        }}
      >
        {i + 1}
      </a>
    ));
  };

  useEffect(() => {
    renderGallery();
    renderPagination();
  }, [currentPage]);

  return (
    <div className="container">
      <div className="row">
        <div className={styles.galleryTitle}>
          <h2>Top Categories</h2>
        </div>
      </div>
      <div className="row">
        <div className={styles.gallery} id="gallery">
          {renderGallery()}
        </div>
      </div>
      <div className={styles.pagination} id="pagination">
        {renderPagination()}
      </div>
    </div>
  );
};

export default ProductGallery;
