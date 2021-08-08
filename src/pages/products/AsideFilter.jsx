import React from 'react';
import { withRouter } from 'react-router-dom';
import useCart from '@/hooks/useCart';
import { Tab, Container } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import './ProductListPage.scss';

function AsideFilter(props) {
  // console.log(props);
  const { filter } = props;
  const { addItem } = useCart();
  const quantitySelect = React.useRef(null);

  return (
    <Container className="col d-flex py-2 mx-2 filterContent">
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <div>
            <div
              className="d-grid gap-1 product-container"
              style={{ width: '200px' }}
              key={filter.productId}
            >
              <a href={`/product/${filter.productId}`}>
                <img
                  className="mb-3"
                  style={{ width: '200px' }}
                  src={filter.imageSrc}
                  alt=""
                />
              </a>
              <span className="info fw-bold text-center text-truncate mt-1">
                {filter.name}
              </span>
              <div className="text-center ">
                {filter.discountedPrice !== undefined ? (
                  <span className="info fw-bold text-muted text-decoration-line-through me-2">
                    $
                    {filter.price}
                  </span>
                ) : null}
                <span className="info fw-bold text-danger">
                  $
                  {filter.discountedPrice ?? filter.price}
                </span>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-5">
                {filter.stock > 0 ? (
                  <select
                    select
                    className="form-select form-select-sm d-inline"
                    style={{ width: '80px' }}
                    ref={quantitySelect}
                  >
                    {[...Array(filter.stock)].map((_, i, a) => (
                      <option value={1 + i}>
                        {1 + i}
                        {1 + i === a.length ? '(最多)' : ''}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span>
                    售完，補貨中
                  </span>
                )}
                <button
                  type="button"
                  className="btn btn-sm btn-primary "
                  style={{
                    width: '80px',
                    backgroundColor: 'var(--brand-primary-color)',
                    borderColor: 'var(--brand-primary-color)',
                  }}
                  disabled={filter.stock === 0}
                  onClick={() => addItem(filter, Number(quantitySelect.current?.value ?? 1))}
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Container>
  );
}

export default withRouter(AsideFilter);
