/* eslint-disable @next/next/no-sync-scripts */

import Document, { Html, Head, Main, NextScript} from 'next/document'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SidebarMenu from "../components/SidebarMenu";

class MyDocument extends Document {

  render() {
    return (
      <Html lang="web">
        <Head>
          <link rel="shortcut icon" href="images/logo/favourite_icon.png" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" type="text/css" href="css/fontawesome.css" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" type="text/css" href="css/animate.css" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" type="text/css" href="css/slick.css" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" type="text/css" href="css/slick-theme.css" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" type="text/css" href="css/magnific-popup.css" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" type="text/css" href="css/style.css" />
        </Head>
        <body>
          <div className="body_wrap">
            <Header />
            <SidebarMenu />

            <Main />

          </div>

          <NextScript />

          <script src="js/jquery.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/wow.min.js"></script>
          <script src="js/slick.min.js"></script>
          <script src="js/magnific-popup.min.js"></script>
          <script src="js/isotope.pkgd.min.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDk2HrmqE4sWSei0XdKGbOMOHN3Mm2Bf-M&ver=2.1.6"></script>
          <script src="js/gmaps.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <script src="js/mCustomScrollbar.js"></script>
          <script src="js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument