/* eslint-disable @next/next/no-img-element */
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
                      src="images/logo/lavia-white.png"
                      srcSet="images/logo/lavia-white-2x.png" alt="logo_not_found"
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
                        <a className="nav-link" href="#" id="home_submenu">
                          Home
                        </a>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#about" id="about_submenu">About</a>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#offer" id="portfolio_submenu">
                          contact us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <ul className="header_btns_group ul_li_right">
                    <li>
                      <a className="btn btn_primary text-uppercase" href="https://shopee.ph/laviaroca" target="_blank" rel="noreferrer">Show Now</a>
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