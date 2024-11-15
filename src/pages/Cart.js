import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, setCartItems }) {
  return (
    <div className="container container-fluid">
      <h2 className="mt-5">
        Your Cart: <b>{cartItems.length} items</b>
      </h2>

      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8">
          {cartItems.map((item) => (
            <Fragment>
              <hr />
              <div className="cart-item">
                <div className="row">
                  <div className="col-4 col-lg-3">
                    <img
                      src={item.product.images[0].image}
                      alt={item.product.name}
                      height="90"
                      width="115"
                    />
                  </div>

                  <div className="col-5 col-lg-3">
                    <Link to={"/product/" + item.product._id}>
                      {item.product.name}
                    </Link>
                  </div>

                  <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                    <p id="card_item_price">${item.product.price}</p>
                  </div>

                  <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                    <div className="stockCounter d-inline">
                      <span className="btn btn-danger minus">-</span>
                      <input
                        type="number"
                        className="form-control count d-inline"
                        value="1"
                        readOnly
                      />

                      <span className="btn btn-primary plus">+</span>
                    </div>
                  </div>

                  <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                    <i
                      id="delete_cart_item"
                      className="fa fa-trash btn btn-danger"
                    ></i>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>

        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />
            <p>
              Subtotal: <span className="order-summary-values">1 (Units)</span>
            </p>
            <p>
              Est. total: <span className="order-summary-values">$245.67</span>
            </p>

            <hr />
            <button id="checkout_btn" className="btn btn-primary btn-block">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
