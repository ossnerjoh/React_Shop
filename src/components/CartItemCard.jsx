import React from "react";

function CartItemCard({ product, handleDelete, id }) {
  return (
    <div className="card my-3">
      <div className="row g-0">
        <div className="col-1 p-1  d-flex align-items-center ">
          <img src={product.image} className="img-fluid rounded-start ms-1" />
        </div>
        <div className="col-10">
          <div className="card-body">
            <h6 className="card-title">{product.title}</h6>
            <p className="card-text">{`${product.price}$`}</p>
          </div>
        </div>
        <div className="col-1 d-flex align-items-center">
          <button
            className="btn btn-outline-danger p-1"
            onClick={() => {
              handleDelete(id);
            }}
          >
            <span role="img" aria-label="delete">
              ❌
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
