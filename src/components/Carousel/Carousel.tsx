/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';

const Carousel = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'js/main-slider.js';
    script.async = true;
    document.body.appendChild(script);
  }, [])

  return (
    <section className="slider_section slider_dark" style={{ backgroundImage: "url(images/backgrounds/bg_01.png)" }}>
      <div className="main_slider pb-0 wow fadeInUp" data-wow-delay=".1s">
        <div className="slider_item text-white" style={{ backgroundImage: "url(/images/slider/banner_1.png)" }}>
          <div className="container">
            <div className="row justify-content-lg-start justify-content-md-center">
              <div className="col-lg-6 col-md-8">
                <h3 className="title_text text-white text-uppercase" data-animation="fadeInUp" data-delay=".2s">
                  FINEST BEANS FROM AROUND THE WORLD
                </h3>
                <p data-animation="fadeInUp" data-delay=".4s">
                  Thought coffee is just coffee? It’s more than that. Let us give you another reason (excuse) to treat your palate from a different altitude.
                </p>
                <ul className="btns_group ul_li" data-animation="fadeInUp" data-delay=".6s">
                  <li><a className="btn btn_primary text-uppercase" href="#shop_now">Shop Now</a></li>
                  <li><a className="btn btn_border border_white text-uppercase" href="#learn_more">Learn more</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shape_image">
            <img src="images/slider/shape_01.png" alt="image_not_found" />
          </div>
        </div>

        <div className="slider_item text-white" style={{ backgroundImage: "url(/images/slider/banner_2.png)" }}>
          <div className="container">
            <div className="row justify-content-lg-start justify-content-md-center">
              <div className="col-lg-6 col-md-8">
                <h3 className="title_text text-white text-uppercase" data-animation="fadeInUp" data-delay=".2s">
                  FIND YOUR PERFECT ROAST
                </h3>
                <p data-animation="fadeInUp" data-delay=".4s">
                  Different bean roast gives you distinct aroma and richness. Lighter roasts have more acidity and the darker it gets, the caffeine level decreases but gets stronger taste and flavor from the process. Which are you?
                </p>
                <ul className="btns_group ul_li" data-animation="fadeInUp" data-delay=".6s">
                  <li><a className="btn btn_primary text-uppercase" href="#shop_now">Shop Now</a></li>
                  <li><a className="btn btn_border border_white text-uppercase" href="#learn_more">Learn more</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shape_image">
            <img src="images/slider/shape_01.png" alt="image_not_found" />
          </div>
        </div>

        <div className="slider_item text-white" style={{ backgroundImage: "url(/images/slider/banner_3.png)" }}>
          <div className="container">
            <div className="row justify-content-lg-start justify-content-md-center">
              <div className="col-lg-6 col-md-8">
                <h3 className="title_text text-white text-uppercase" data-animation="fadeInUp" data-delay=".2s">
                  BEANS. COARSE. FINE. YOU DECIDE.
                </h3>
                <p data-animation="fadeInUp" data-delay=".4s">
                  Thought you already know what coffee is? Quality of water, temperature and type of beans are all essential, but everything comes down to the grind size to make it perfect. Not sure what grind type you are?
                </p>
                <ul className="btns_group ul_li" data-animation="fadeInUp" data-delay=".6s">
                  <li><a className="btn btn_primary text-uppercase" href="#shop_now">Shop Now</a></li>
                  <li><a className="btn btn_border border_white text-uppercase" href="#learn_more">Learn more</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shape_image">
            <img src="images/slider/shape_01.png" alt="image_not_found" />
          </div>
        </div>

        <div className="slider_item text-white" style={{ backgroundImage: "url(/images/slider/banner_4.png)" }}>
          <div className="container">
            <div className="row justify-content-lg-start justify-content-md-center">
              <div className="col-lg-6 col-md-8">
                <h3 className="title_text text-white text-uppercase" data-animation="fadeInUp" data-delay=".2s">
                  BREW. SMELL. ENJOY.
                </h3>
                <p data-animation="fadeInUp" data-delay=".4s">
                  Love coffee and teas in every shape or form? Our offerings is not just about coffee beans. Check out and shop now!
                </p>
                <ul className="btns_group ul_li" data-animation="fadeInUp" data-delay=".6s">
                  <li><a className="btn btn_primary text-uppercase" href="#shop_now">Shop Now</a></li>
                  <li><a className="btn btn_border border_white text-uppercase" href="#learn_more">Learn more</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shape_image">
            <img src="images/slider/shape_01.png" alt="image_not_found" />
          </div>
        </div>
      </div>
      <div className="carousel_nav">
        <button className="main_left_arrow" type="button"><i className="fal fa-arrow-up"></i></button>
        <button className="main_right_arrow" type="button"><i className="fal fa-arrow-down"></i></button>
      </div>
      <div className="slider_social_wrap">
        <div className="container maxw_1560">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 col-md-4 order-last">
              <a className="popup_video video_btn1 text-uppercase wow fadeInRight" href="https://www.youtube.com/watch?v=hS5eOmiPvTI">
                <span className="pulse"><i className="fas fa-play"></i></span>
                <small>Play video</small>
              </a>
            </div>
            <div className="col-lg-6 col-md-8">
              <ul className="social_links social_text ul_li text-uppercase wow fadeInLeft">
                <li><a href="https://facebook.com/laviaroca" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i> facebook</a></li>
                <li><a href="https://instagram.com/laviaroca" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> instagram</a></li>
                <li><a href="https://shopee.ph/laviaroca" target="_blank" rel="noreferrer"><i className="fa fa-store"></i> shopee</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
