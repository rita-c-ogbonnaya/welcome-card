
import FAQAccordion from "@/app/components/FAQAccordion";
const HomeComponent = () => {
  return (
    <>
      {/* Top Section */}
      <div className="hero wf-section overflow-hidden">
        <img
          src="images/5569310.webp"
          loading="lazy"
          width={149}
          sizes="(max-width: 991px) 100vw, 149px"
          srcSet="images/5569310-p-500.png 500w, images/5569310.webp 591w"
          alt=""
          className="image-16"
        />
        <img
          src="images/bag-image.webp"
          loading="lazy"
          width={310}
          sizes="(max-width: 991px) 100vw, 310px"
          alt="Travellers bag, hat and passports"
          srcSet="images/bag-image-p-500.png 500w, images/bag-image-p-800.png 800w, images/bag-image-p-1080.png 1080w, images/bag-image-p-1600.png 1600w, images/bag-image-p-2000.webp 2000w, images/bag-image.webp 2000w"
          className="image-17"
        />
        <div className="container-5 w-container">
          <h1 className="hero-header">Pay like a local wherever you go!</h1>
          <div className="text-block body-text dark body-20 center">
            Making travel local, we aim to give travelers financial certainty
            and assurance in their financial transactions.
          </div>
          <a href="#" className="button ">
            Get a card for free!
          </a>
        </div>
        <img
          src="images/Map.png"
          loading="lazy"
          width={210}
          sizes="(max-width: 991px) 100vw, 210px"
          srcSet="images/Map-p-500.png 500w, images/Map-p-800.png 800w, images/Map.png 1000w"
          alt=""
          className="image-14"
        />
        <img
          src="images/Plane.webp"
          loading="lazy"
          width={250}
          sizes="(max-width: 991px) 100vw, 250px"
          srcSet="images/Plane-p-500.png 500w, images/Plane-p-800.png 800w, images/Plane-p-1080.png 1080w, images/Plane-p-1600.png 1600w, images/Plane.webp 2018w"
          alt=""
          className="image-15"
        />
      </div>

      {/* Center Section */}
      <div className="section-8 wf-section">
        <div className="div-block-4">
          <img
            src="images/center-image-final.webp"
            loading="lazy"
            sizes="(max-width: 479px) 81vw, (max-width: 991px) 90vw, (max-width: 1279px) 100vw, 1100px"
            srcSet="images/center-image-final-p-500.png 500w, images/center-image-final-p-800.png 800w, images/center-image-final-p-1080.png 1080w, images/center-image-final.webp 1741w"
            alt="travellers with locations"
            className="image-center"
          />
        </div>
        <div className="div-block-10">
          <h2 id="Try-app" className="heading-8 center">
            Try our App
          </h2>
          <div className="text-block-7 center">
            With no limitation to your credit balance score, you get to buy,
            shop, pay and enjoy.
            <br />
          </div>
        </div>
        <div className="div-block-5">
          <img
            src="images/icon_App-Store_2.png"
            loading="lazy"
            sizes="(max-width: 479px) 160px, 180px"
            width={530}
            srcSet="images/icon_App-Store_2-p-500.png 500w, images/icon_App-Store_2.png 1035w"
            alt=""
            className="store-icons"
          />
          <img
            src="images/icon_Google-Play_2.png"
            loading="lazy"
            sizes="(max-width: 479px) 160px, 180px"
            srcSet="images/icon_Google-Play_2-p-500.png 500w, images/icon_Google-Play_2.png 1035w"
            alt=""
            className="store-icons"
          />
        </div>
      </div>
      {/* End Center Section */}

      {/* End Top Section */}

      {/* About Section */}
      <div id="About" className="main-section bottom wf-section">
        <div className="main-container">
          <div className="w-layout-grid _1-2-grid">
            <img
              src="images/image-1.webp"
              loading="lazy"
              id="w-node-d175a22b-6e5a-7492-f0d8-03cc7e1ab815-cd7146f1"
              sizes="(max-width: 991px) 81vw, (max-width: 1279px) 90vw, 1100px"
              srcSet="images/image-1-p-500.jpg 500w, images/image-1-p-800.jpg 800w, images/image-1-p-1080.jpg 1080w, images/image-1-p-1600.jpg 1600w, images/woman-walking-kelingking-beach-nusa-penida-island-bali-indonesia-p-2000.webp 2000w, images/image-1.webp 2000w"
              alt=""
              className="hero-image"
            />
            <div
              id="w-node-d175a22b-6e5a-7492-f0d8-03cc7e1ab80c-cd7146f1"
              className="content-wrap"
            >
              <div className="div-block-6">
                <img
                  src="images/travel.svg"
                  loading="lazy"
                  width={50}
                  alt=""
                  className="image-9"
                />
                <h2 className="heading-8">Travel without worry.</h2>
              </div>
              <p className="text-block-7 left">
                We love a good story and even better a good traveling
                experience; experience the best while visiting a new country
                with an easy way to pay and make transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="main-section top wf-section">
        <div className="main-container">
          <div className="w-layout-grid _1-2-grid">
            <div
              id="w-node-_69c9d55d-e8b8-021b-3b32-603958e73d95-cd7146f1"
              className="content-wrap right-justified"
            >
              <div className="div-block-7">
                <img
                  src="images/MONEY.svg"
                  loading="lazy"
                  width={50}
                  alt=""
                  className="image-9 right"
                />
                <h2 id="Features" className="heading-8 right">
                  Pay without limits.
                </h2>
              </div>
              <p className="text-block-7">
                With no limitation to your credit balance score, you get to buy,
                shop, pay and enjoy the luxury of traveling to a new destination
                without any payment limitations.
              </p>
            </div>
            <img
              src="images/image-2.webp"
              loading="lazy"
              id="w-node-_69c9d55d-e8b8-021b-3b32-603958e73d9e-cd7146f1"
              sizes="(max-width: 991px) 81vw, (max-width: 1279px) 90vw, 1100px"
              alt="Black man with credit card during lunch"
              srcSet="images/image-2-p-500.jpg 500w, images/image-2-p-800.jpg 800w, images/image-2-p-1080.jpg 1080w, images/image-2-p-1600.jpg 1600w, images/image-2-p-2000.webp 2000w, images/image-2.webp 2000w"
              className="hero-image alt-shadow"
            />
          </div>
        </div>
      </div>

      {/* End Center Section */}

      {/* Center Section 2 */}
      <div className="section-4 wf-section">
        <h2 className="heading-4">
          Get your Card in 3 Steps
          <br />
        </h2>
        <div className="w-layout-grid grid-2">
          <div
            id="w-node-_57932899-4626-c3b6-51be-3aeab3ac0b7d-cd7146f1"
            className="grid-block"
          >
            <img
              src="images/Group-3609.svg"
              loading="lazy"
              width={60}
              alt=""
              className="image-9"
            />
            <h4 className="heading-5">Fund your account</h4>
            <div className="body-text">
              Fund your new card with dollars and get the equivalent amount in
              the local currency of your destination country.
            </div>
          </div>
          <div
            id="w-node-_3bc27178-1061-1c47-3bc0-9485a55e3e1a-cd7146f1"
            className="grid-block"
          >
            <img
              src="images/Group-3608.svg"
              loading="lazy"
              width={60}
              alt=""
              className="image-10"
            />
            <h4 className="heading-5">Register</h4>
            <div className="body-text">
              Fill in your details and get your physical card.{" "}
            </div>
          </div>
          <div
            id="w-node-b4cd6870-eb2f-48c8-7a04-399ef79e85dc-cd7146f1"
            className="grid-block"
          >
            <img
              src="images/Group-3607.svg"
              loading="lazy"
              width={60}
              alt=""
              className="image-11"
            />
            <h4 className="heading-5">Locate our Kiosk</h4>
            <div className="body-text">
              Immediately arriving at your destination country; visit a welcome
              card kiosk close to you in any airport.
            </div>
          </div>
        </div>
      </div>

      {/* End Center Section 2 */}

      {/* End About Section */}

      {/* Testimonial Section */}
      <div className="testimonial wf-section">
        <div className="columns-4 w-row">
          <div className="w-col w-col-6">
            <h1 className="heading-9">23,805</h1>
            <div className="text-block-8">Active Users</div>
          </div>
          <div className="w-col w-col-6">
            <div>
              <div className="text-block-6">
                "Making travel local, we aim to give travelers financial
                certainty and assurance in their financial transactions."
              </div>
            </div>
            <div className="div-block-3">
              <div className="div-block-2" />
              <h3 className="heading-7">
                <strong>
                  Andre Joshua
                  <br />
                </strong>
                Product Designer
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-section wf-section">
        <div className="main-container">
          <div
            id="w-node-_18c561dd-7d3d-38c2-2e8d-71eedacfc1b6-cd7146f1"
            className="content-wrap right-justified"
          >
            <div>
              <div className="w-layout-grid grid-3">
                <div
                  id="w-node-_7916aa45-0652-efff-1543-e4fed7787ce9-cd7146f1"
                  className="div-block-8"
                >
                  <img
                    src="images/iphone-mockup-cards.webp"
                    loading="lazy"
                    id="w-node-_18c561dd-7d3d-38c2-2e8d-71eedacfc1bd-cd7146f1"
                    sizes="100vw"
                    srcSet="images/iphone-mockup-cards-p-500.png 500w, images/iphone-mockup-cards-p-800.png 800w, images/iphone-mockup-cards.webp 1000w"
                    alt="phone with Welcome Card debit cards
"
                    className="hero-image no-shadow"
                  />
                </div>
                <div
                  id="w-node-_9ba69ff2-f300-442d-32c6-925e2c1f5d41-cd7146f1"
                  className="div-block-9"
                >
                  <h2 id="Features" className="heading-8">
                    Your transactions in one app!
                  </h2>
                  <p className="text-block-7">
                    Get instant update on your financial activities and balance
                    after a transaction done locally. No wait time - move on to
                    the next transaction.
                  </p>
                  <div className="ticks">
                    <img
                      src="images/check.svg"
                      loading="lazy"
                      width={20}
                      alt=""
                      className="image-4"
                    />
                    <div className="text-block-5">
                      <strong className="bold-text-2">
                        Transparent transaction activity
                        <br />
                      </strong>
                    </div>
                  </div>
                  <div className="ticks">
                    <img
                      src="images/check.svg"
                      loading="lazy"
                      width={20}
                      alt=""
                      className="image-4"
                    />
                    <div className="text-block-5">
                      <strong className="bold-text-2">
                        100% security guaranteed
                        <br />
                      </strong>
                    </div>
                  </div>
                  <div className="ticks">
                    <img
                      src="images/check.svg"
                      loading="lazy"
                      width={20}
                      alt=""
                      className="image-4"
                    />
                    <div className="text-block-5">
                      <strong className="bold-text-2">
                        No wait time - instant transaction&nbsp;reflection
                        <br />
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Main Section     */}

      {/* Second Main Section */}
      <div className="main-section wf-section">
        <div className="main-container">
          <div className="">
    
           <FAQAccordion />

          </div>
        </div>
      </div>

      {/* End Second Main Section */}

      {/* End Testimonial Section  */}
    </>
  );
};

export default HomeComponent;
