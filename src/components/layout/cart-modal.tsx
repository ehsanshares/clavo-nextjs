// CartModal — Clavo's localStorage cart drawer, rendered once outside the page
// wrapper (as in the original markup). ClavoScripts opens/closes and populates it.
export function CartModal() {
  return (
    <div aria-hidden="true" className="cart-modal">
    <div aria-label="Your cart" className="cart-container" role="dialog">
    <div className="cart-header">
    <h4 className="cart-heading">
                Your Cart
              </h4>
    <a aria-label="Close cart" className="cart-close" data-cart-close="" role="button">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
    <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6">
    </path>
    </svg>
    </a>
    </div>
    <ul className="cart-list" data-cart-list="">
    </ul>
    <div className="cart-empty" data-cart-empty="">
              No items found.
            </div>
    <div className="cart-footer" data-cart-footer="" hidden>
    <div className="cart-subtotal-row">
    <div>
                  Subtotal
                </div>
    <div data-cart-subtotal="">
                  $0.00
                </div>
    </div>
    <a className="checkout-button" href="/checkout">
                Continue to Checkout
              </a>
    </div>
    </div>
    </div>
  );
}
