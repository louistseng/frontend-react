import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import useCart from '@/hooks/useCart';

function ProductsShowcaseGrid({ product }) {
  const { addItem } = useCart();
  const quantitySelect = React.useRef(null);

  return (
    <div className="d-grid gap-2 product-container pb-5" style={{ width: '200px' }}>
      <Link to={`/product/${product.productId}`}>
        <img
          className="img200 rounded"
          src={product.imageSrc}
          alt={product.name}
        />
      </Link>
      <span className="info fw-bold text-center text-truncate mt-3">
        {product.name}
      </span>
      <div className="text-center">
        {product.discountedPrice !== undefined ? (
          <span className="info fw-bold text-muted text-decoration-line-through me-2">
            $
            {product.price}
          </span>
        ) : null}
        <span className="info fw-bold text-danger">
          $
          {product.discountedPrice ?? product.price}
        </span>
      </div>
      <div className="d-flex justify-content-around align-items-center mt-2">
        <select className="form-select form-select-sm d-inline" style={{ width: '80px' }} ref={quantitySelect}>
          {[...Array(10)].map((_, i, a) => (
            // eslint-disable-next-line react/no-array-index-key
            <option value={1 + i} key={1 + i}>
              {1 + i}
              {1 + i === a.length ? '(最大)' : ''}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          style={{
            width: '80px',
            backgroundColor: 'var(--brand-primary-color)',
            borderColor: 'var(--brand-primary-color)',
          }}
          onClick={() => addItem(product, Number(quantitySelect.current?.value ?? 1))}
        >
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
}
export default function ProductsShowcase({ products }) {
  return (
    <div className="d-flex justify-content-between">
      {products.map(product => (
        <ProductsShowcaseGrid key={product.productId} product={product} />
      ))}
    </div>
  );
}
