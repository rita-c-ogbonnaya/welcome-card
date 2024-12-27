const Header = () => {
  return (
    <>
      <>
        <meta charSet="utf-8" />
        <title>A local card for International Travellers - Welcome Card</title>
        <meta
          content="A local card for International Travellers"
          name="description"
        />
        <meta
          content="A local card for International Travellers - Welcome Card"
          property="og:title"
        />
        <meta
          content="A local card for International Travellers"
          property="og:description"
        />
        <meta
          content="A local card for International Travellers - Welcome Card"
          property="twitter:title"
        />
        <meta
          content="A local card for International Travellers"
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="HCyGIn7MGhirscygXNSqF4kQRat-J2nUPQUsb0AS5l8"
          name="google-site-verification"
        />
        <link href="css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="css/welcomecard.webflow.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        {/* [if lt IE 9]><![endif] */}
        <link
          href="images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/webclip.png" rel="apple-touch-icon" />
      </>

      
      {/* Navbar Section */}
      <div
        data-collapse="small"
        data-animation="default"
        data-duration={450}
        data-w-id="75ba0380-486c-5b6c-8ddc-d28ffa4b3581"
        data-easing="ease-out-quart"
        data-easing2="ease-out-quart"
        role="banner"
        className="navbar-outer "
      >
        <div className="navbar-container">
          <a href="/" aria-current="page" className="w-inline-block w--current">
            <img
              src="images/WC-1.svg"
              loading="lazy"
              alt=""
              className="image-18"
            />
          </a>
          <nav
            role="navigation"
            className="navbar-menu overflow-hidden w-nav-menu"
          >
            <a href="#About" className="nav-link-5 w-nav-link">
              About
            </a>
            <a href="#Features" className="nav-link-5 w-nav-link">
              Features
            </a>
            <a href="#FAQ" className="nav-link-5 w-nav-link">
              FAQs
            </a>
            <a href="#Try-app" className="button-primary ">
              Download app
            </a>
          </nav>
          <div className="navbar_menu-button w-nav-button">
            <div className="menu-icon">
              <div className="menu-icon-line-top" />
              <div className="menu-icon-line-middle">
                <div className="menu-icon-line-middle-inner" />
              </div>
              <div className="menu-icon-line-bottom" />
            </div>
          </div>
        </div>
      </div>
      {/* End of Navbar Section */}

    </>
  );
};

export default Header;