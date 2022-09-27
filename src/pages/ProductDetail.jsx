import '../styles/pages/ProductDetail.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';

const ProductDetail = () => {
  const params = useParams();

  return (
    <div className="ProductDetailContainer">
      <h1>Product Detail</h1>
      <Details id={params.id} />
    </div>
  );
};

export default ProductDetail;
