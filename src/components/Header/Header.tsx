const Header = () => {
  return (
    <>
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
          <i className="far fa-arrow-up"></i>
        </a>
      </div>
      <div id="preloader"></div>

      <header className="header_section">
        <div className="content_wrap">
          <div className="container maxw_1560">
            <div className="row align-items-center">

              <div className="col-lg-2 col-md-6 col-6">
                <div className="brand_logo">
                  <a className="brand_link" href="index.html">
                    <img
                      src="images/logo/logo_white_1x.png"
                      srcSet="images/logo/logo_white_2x.png 2x" alt="logo_not_found"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-10 col-md-6 col-6">
                <nav className="main_menu navbar navbar-expand-lg">
                  <button className="mobile_menu_btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fal fa-bars"></i></span>
                  </button>
                  <div className="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                    <ul className="main_menu_list ul_li">
                      <li className="active dropdown">
                        <a className="nav-link" href="#" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Home
                        </a>
                        <ul className="submenu dropdown-menu" aria-labelledby="home_submenu">
                          <li><a href="index.html">Home V.1</a></li>
                          <li><a href="index_2.html">Home V.2</a></li>
                          <li><a href="index_3.html">Home V.3</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="about_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                        <ul className="submenu dropdown-menu" aria-labelledby="about_submenu">
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="about_2.html">About Me</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="portfolio_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          shop
                        </a>
                        <ul className="submenu dropdown-menu" aria-labelledby="portfolio_submenu">
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="shop_details.html">Shop Details</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pages
                        </a>
                        <ul className="submenu dropdown-menu" aria-labelledby="services_submenu">
                          <li><a href="menu.html">Recipe Menu</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li className="dropdown">
                            <a href="#" id="checkout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Checkout</a>
                            <ul className="submenu dropdown-menu" aria-labelledby="checkout_submenu">
                              <li><a href="checkout.html">Checkout Step 1</a></li>
                              <li><a href="checkout_step2.html">Checkout Step 2</a></li>
                              <li><a href="checkout_step3.html">Checkout Step 3</a></li>
                            </ul>
                          </li>
                          <li><a href="faq.html">F.A.Q.</a></li>
                          <li><a href="reserve_table.html">Reserve Table</a></li>
                          <li><a href="reservation_form.html">Reservation Form</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="experience_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Blog
                        </a>
                        <ul className="submenu dropdown-menu" aria-labelledby="experience_submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog_details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a className="nav-link" href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>

                  <ul className="header_btns_group ul_li_right">
                    <li>
                      <button type="button" className="main_search_btn" data-bs-toggle="collapse" data-bs-target="#main_search_collapse" aria-expanded="false" aria-controls="main_search_collapse">
                        <i className="fal fa-search"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="cart_btn">
                        <i className="fal fa-shopping-bag"></i>
                        <small className="cart_counter">2</small>
                      </button>
                    </li>
                    <li>
                      <a className="btn btn_primary text-uppercase" href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>

        <div className="main_search_collapse collapse" id="main_search_collapse">
          <div className="main_search_form card">
            <div className="container maxw_1560">
              <form action="#">
                <div className="form_item">
                  <input type="search" name="search" placeholder="Search here..." />
                  <button type="submit" className="submit_btn">
                    <i className="fal fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;