// Clavo template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function OrderConfirmationPage() {
  return (
    <>
      <div className="order-confirmation">
      <div className="container container">
      <div>
      <div>
      <div>
      <h5>
                      Customer Information
                    </h5>
      </div>
      <fieldset className="checkout-title">
      <div>
      <div>
      <div>
      <label>
                            Email
                          </label>
      <div>
      </div>
      </div>
      </div>
      <div>
      <div>
      <label>
                            Shipping Address
                          </label>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      </div>
      <div>
      </div>
      </div>
      </div>
      </div>
      </fieldset>
      </div>
      <div>
      <div>
      <h5>
                      Shipping Method
                    </h5>
      </div>
      <fieldset className="checkout-title">
      <div>
      <div>
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      </div>
      </div>
      </fieldset>
      </div>
      <div>
      <div>
      <h5>
                      Payment Info
                    </h5>
      </div>
      <fieldset className="checkout-title">
      <div>
      <div>
      <div>
      <label>
                            Payment Info
                          </label>
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      <div>
      <div>
      </div>
      <div>
                              /
                            </div>
      <div>
      </div>
      </div>
      </div>
      </div>
      <div>
      <div>
      <label>
                            Billing Address
                          </label>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      </div>
      <div>
      </div>
      </div>
      </div>
      </div>
      </fieldset>
      </div>
      <div>
      <div>
      <h5>
                      Items in Order
                    </h5>
      </div>
      <fieldset className="checkout-title">
      <div data-checkout-items="" role="list">
      </div>
      </fieldset>
      </div>
      </div>
      <div>
      <div>
      <div>
      <h5>
                      Order Summary
                    </h5>
      </div>
      <fieldset className="checkout-title">
      <div>
      <div>
                        Subtotal
                      </div>
      <div data-checkout-subtotal="">
      </div>
      </div>
      <div>
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      </div>
      <div>
      <div className="bold-text">
                        Total
                      </div>
      <div className="bold-text" data-checkout-total="">
      </div>
      </div>
      </fieldset>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
