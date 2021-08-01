/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <Fragment>
      <Carousel />

      {/* Feature Section */}
      <section className="feature_primary_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="feature_primary wow fadeInUp" data-wow-delay=".1s">
                <div className="item_icon">
                  <span className="item_serial">1</span>
                  <img src="images/feature/1.png" alt="icon_not_found" />
                </div>
                <h3 className="item_title text-uppercase">SUPERIOR GRADE</h3>
                <p className="mb-0">
                  Carefully acquired from coffee farmers. Nothing but the finest quality just for you.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="feature_primary wow fadeInUp" data-wow-delay=".2s">
                <div className="item_icon">
                  <span className="item_serial">2</span>
                  <img src="images/feature/2.png" alt="icon_not_found" />
                </div>
                <h3 className="item_title text-uppercase">PROPER ROASTING</h3>
                <p className="mb-0">
                  The aroma and flavor varies on how it is roasted. Just choose your roast type and we’ll do the rest.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="feature_primary wow fadeInUp" data-wow-delay=".3s">
                <div className="item_icon">
                  <span className="item_serial">3</span>
                  <img src="images/feature/3.png" alt="icon_not_found" />
                </div>
                <h3 className="item_title text-uppercase">PRECISE GRINDING</h3>
                <p className="mb-0">
                  Not all grind types suits all coffee makers. Know how they work and who they’re best for. Precise grinding is needed to get the best out of your preference.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="feature_primary wow fadeInUp" data-wow-delay=".4s">
                <div className="item_icon">
                  <span className="item_serial">4</span>
                  <img src="images/feature/4.png" alt="icon_not_found" />
                </div>
                <h3 className="item_title text-uppercase">FRESH COFFEE RIGHT AT YOUR DOORSTEP</h3>
                <p className="mb-0">
                  We make sure that it’s fresh the moment you sip it. Ground and roasted only upon confirmation of orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about_section sec_ptb_120" id="about">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 col-md-6 order-last">
              <div className="about_image1 wow fadeInRight" data-wow-delay=".1s">
                <img src="images/about/about_us.png" alt="image_not_found" />
                <div className="year_content_wrap text-uppercase" style={{ backgroundImage: "url(images/about/bg_01.png)" }}>
                <div className="content_wrap">
                <span>27 <small>+ years of</small></span>
                <strong>experience</strong>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about_content">
                <div className="section_title text-uppercase">
                  <h2 className="small_title"><i className="fas fa-coffee"></i> about us</h2>
                  <h3 className="big_title wow fadeInUp" data-wow-delay=".1s">
                    ALL ABOUT LAVIA ROCA
                  </h3>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".2s">
                  The idea of Lavia Roca began when three (3) aficionados were talking about the bland drinks they ordered from a cafe. Determined to serve the best coffee drink possible, their goal has grown to become the highest quality buyers of coffee beans around the world where they personally travel to coffee farms to select the richest flavor possible
                </p>
                <p className="wow fadeInUp" data-wow-delay=".2s">
                  Back then, they were a simple retailer of whole beans and ground coffee, blended teas and spices. Then, the passion to share the happiness to other coffee lovers has naturally came. Lavia Roca welcomes you to a place, where we will not just satisfy your coffee cravings but where you’ll get to experience the variety of drinks worldwide conveniently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* offer section */}
      <section className="offer_section" >
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-4">
              <div className="offer_video wow fadeIn" data-wow-delay=".1s">
                <div className="overlay"></div>
                <img src="images/offer/offer_01.jpeg" alt="image_not_found" />
                <a className="popup_video video_btn2" href="https://www.youtube.com/watch?v=hS5eOmiPvTI">
                  <span className="pulse"><i className="fas fa-play"></i></span>
                  <small className="text-uppercase">Play Video</small>
                </a>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="offer_area">
                <div className="offer_image">
                  <img src="images/offer/img_02.png" alt="image_not_found" />
                </div>
                <div className="offer_content">
                  <div className="section_title text-uppercase">
                    <h2 className="small_title wow fadeInUp" data-wow-delay=".1s"><i className="fas fa-coffee"></i> what we offer</h2>
                    <h3 className="big_title wow fadeInUp" data-wow-delay=".2s">
                      DIVINE AROMA IN EVERY SINGLE USE
                    </h3>
                  </div>

                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Coffee has been a household name in centuries but it isn’t made just for drinking. The bizarre use and health benefits of coffee, (at least according to science) has never been a surprise. From essential oils to body scrubs and a lot more related products, coffee has proven its anti-depressant aroma, anti-oxidant benefits, can be used as an exfoliator, acts as a stimulant, boosts weight loss, improves the memory, used as a fertilizer and many more countless benefits.
                  </p>
                  <p className="mb-0 wow fadeInUp" data-wow-delay=".4s">
                    Through the combined effort of our team, we thoroughly select the best products that we believe can enable better living experience.  After all, coffee is a conversation starter and intertwines multiple cultures.
                  </p>
                </div>
              </div>

              <div className="row g-0" id="offer">
                <div className="offerinfo_col col-lg-4">
                  <div className="offer_info_item table_reservation_contact wow fadeInUp" data-wow-delay=".1s">
                    <h3 className="offer_info_title text-uppercase">Contact Us<i className="fal fa-heart"></i></h3>
                    <ul className="ul_li_block">
                      <li>
                        <div className="item_icon">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="item_content">
                          <span>+939 201 4230 (Philippines)</span>
                        </div>
                      </li>
                      <li>
                        <div className="item_icon"><i className="fas fa-envelope"></i></div>
                        <div className="item_content">
                          <span>shop@laviaroca.com</span>
                        </div>
                      </li>
                      <li>
                        <div className="item_icon"><i className="fas fa-fax"></i></div>
                        <div className="item_content">
                          <span>Central Perk, Greenwich Village</span>
                        </div>
                      </li>
                    </ul>
                    <a className="btn btn_secondary text-uppercase" href="contact.html">
                      Follow Us
                    </a>
                  </div>
                </div>

                <div className="offerinfo_col col-lg-4">
                  <div
                    className="offer_info_item opening_time text-uppercase text-white wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{ backgroundImage: "url(images/offer/bg_01.png)" }}
                  >
                    <h3 className="offer_info_title text-white">Opening hours. . . . <i className="fal fa-clock"></i></h3>
                    <ul className="ul_li_block">
                      <li>
                        Monday
                        <span>9:00 - 18:00</span>
                      </li>
                      <li>
                        tuesday
                        <span>10:00 - 18:00</span>
                      </li>
                      <li>
                        wednestday
                        <span>11:00 - 18:00</span>
                      </li>
                      <li>
                        Thusday
                        <span>12:00 - 18:00</span>
                      </li>
                      <li>
                        Friday
                        <span>14:00 - 18:00</span>
                      </li>
                      <li>
                        saterday
                        <span>16:00 - 18:00</span>
                      </li>
                      <li>
                        Sunday
                        <span>closed</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="offerinfo_col col-lg-4">
                  <div className="offer_info_item friday_offer text-center wow fadeInUp" data-wow-delay=".3s">
                    <h3 className="offer_info_title text-uppercase">Friday Offer. . . . <i className="fal fa-gift"></i></h3>
                    <img src="images/offer/img_03.png" alt="image_not_found" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home;