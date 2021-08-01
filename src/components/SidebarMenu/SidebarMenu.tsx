/* eslint-disable @next/next/no-img-element */
const Navigation = () => {
  return (
    <div className="sidebar-menu-wrapper">
      <div className="cart_sidebar">
        <button type="button" className="close_btn"><i className="fal fa-times"></i></button>
        <h2 className="heading_title text-uppercase">Cart Items - <span>4</span></h2>

        <div className="cart_items_list">
          <div className="cart_item">
            <div className="item_image">
              <img src="images/recent_post/img_03.jpg" alt="image_not_found" />
            </div>
            <div className="item_content">
              <h4 className="item_title">
                Rorem ipsum dolor sit amet, sectetur adipisi cingey.
              </h4>
              <span className="item_price">$19.00</span>
              <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
            </div>
          </div>

          <div className="cart_item">
            <div className="item_image">
              <img src="images/recent_post/img_04.jpg" alt="image_not_found" />
            </div>
            <div className="item_content">
              <h4 className="item_title">
                Rorem ipsum dolor sit amet, sectetur adipisi cingey.
              </h4>
              <span className="item_price">$19.00</span>
              <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
            </div>
          </div>

          <div className="cart_item">
            <div className="item_image">
              <img src="images/recent_post/img_05.jpg" alt="image_not_found" />
            </div>
            <div className="item_content">
              <h4 className="item_title">
                Rorem ipsum dolor sit amet, sectetur adipisi cingey.
              </h4>
              <span className="item_price">$19.00</span>
              <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
            </div>
          </div>

          <div className="cart_item">
            <div className="item_image">
              <img src="images/recent_post/img_06.jpg" alt="image_not_found" />
            </div>
            <div className="item_content">
              <h4 className="item_title">
                Rorem ipsum dolor sit amet, sectetur adipisi cingey.
              </h4>
              <span className="item_price">$19.00</span>
              <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
            </div>
          </div>
        </div>
        <div className="total_price text-uppercase">
          <span>Sub Total:</span>
          <span>$76.00</span>
        </div>
        <ul className="btns_group ul_li">
          <li><a href="cart.html" className="btn btn_primary text-uppercase">View Cart</a></li>
          <li><a href="checkout.html" className="btn btn_border border_black text-uppercase">Checkout</a></li>
        </ul>
      </div>
      <div className="cart_sidebar_overlay" />
    </div>
  );
};

export default Navigation;
