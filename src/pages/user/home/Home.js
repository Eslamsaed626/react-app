import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner_5 from "../../../assets/images/banners/banner-5.png";
import icon_1 from "../../../assets/images/services_img/icon-1.png";
import ProSlider from "../../../components/user/slider/Slider";
import "./Home.css";
import Product from "../../../components/user/product/Product";
import ProductDetails from "../../../components/user/product-details/Product-details";
import Part from "../../../components/user/small-part/Part";
import Banner from "../../../components/user/banner/Banner";
import HeadSlider from "../../../components/user/head_slider/HeadSlider";
export default function Homes() {
  const [banner_data, setBannerData] = useState({});
  const [allFeatured, setAllFeatured] = useState([]);
  const [allFeatured_banner, setAllFeaturedBanner] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // to get banners
  useEffect(() => {
    fetch(
      fetch("http://localhost:4000/banners")
        .then((res) => res.json())
        .then((data) => {
          setBannerData(data.banner);
        })
    );
  }, []);

  // to get featured

  useEffect(() => {
    fetch(
      fetch("http://localhost:4000/featured")
        .then((res) => res.json())
        .then((data) => {
          setAllFeatured(data);
        })
    );
  }, []);

  // get banner
  useEffect(() => {
    fetch(
      fetch("http://localhost:4000/featured_banner")
        .then((res) => res.json())
        .then((data) => {
          setAllFeaturedBanner(data);
        })
    );
  }, []);

  // get all product
  useEffect(() => {
    fetch(
      fetch("http://localhost:4000/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAllProducts(data);
        })
    );
  }, []);

  return (
    <>
      <section className="head_slider">
        <HeadSlider></HeadSlider>
      </section>

      <section className="featured">
        <div className="container-fluid">
          <h2>Featured Categories</h2>
          <div className="featured_items">
            {allFeatured.map((ele) => (
              <div className="featured_item">
                <img src={ele.image} />
                <div className="text-center">
                  <Link>
                    <h6>{ele.title}</h6>
                  </Link>
                  <span>{ele.item_count} items</span>
                </div>
              </div>
            ))}
          </div>

          <div className="feature_banners">
            <div className="row">
              {allFeatured_banner.map((ele, index) => (
                <div className="col-md-4">
                  <div
                    className="feature_banner"
                    style={{
                      backgroundImage: `url(images/banners/banner-${
                        index + 1
                      }.png)`,
                    }}
                  >
                    <h3>{ele.text}</h3>
                    <Link>
                      <button>Shop Now</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="populer">
        <div className="container-fluid">
          <div className="populer_head">
            <h3>Popular Products</h3>
            <ul className="list-unstyled">
              <li>all</li>
              <li>Milks & Dairies</li>
              <li>Coffes & Teas</li>
              <li>Pet Foods</li>
              <li>Meats</li>
              <li>Vegetables</li>
              <li>Fruits</li>
            </ul>
          </div>

          <div className="populer_products">
            {allProducts.map((product) => (
              // console.log(product)

              <Product
                pro_width={19}
                // product_image={product.product_image}
                // tage={product.tage}
                // product={product}
              ></Product>
            ))}
          </div>
        </div>
      </section>

      <section className="best_sell">
        <div className="container-fluid">
          <div className="best_head">
            <h3>Daily Best Sells</h3>
          </div>

          <div className="best_slider">
            <div className="row">
              <div className="col-md-3 ">
                <div className="best_banner">
                  <h2>Bring nature into your home</h2>
                  <button>Shop Now</button>
                </div>
              </div>

              <div className="col-md-9">
                <div className="best_slide">
                  <ProSlider></ProSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deals">
        <div className="container-fluid">
          <div className="deals_head">
            <h3>Deals Of The Day</h3>
            <span>All Deals</span>
          </div>
          <div className="products_deals">
            <div className="row">
              <div className="col-md-3">
                <div className="product_deal">
                  <div>
                    <img src={banner_5} />
                  </div>
                  <div className="pro_deal_details">
                    <div className="deal_time">
                      <div className="days">
                        <span>12</span>
                        <p>Days</p>
                      </div>
                      <div className="houre">
                        <span>12</span>
                        <p>hour</p>
                      </div>
                      <div className="mins">
                        <span>12</span>
                        <p>Mins</p>
                      </div>
                      <div className="secon">
                        <span>12</span>
                        <p>Sec</p>
                      </div>
                    </div>

                    <ProductDetails></ProductDetails>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product_deal">
                  <div>
                    <img src={banner_5} />
                  </div>
                  <div className="pro_deal_details">
                    <div className="deal_time">
                      <div className="days">
                        <span>12</span>
                        <p>Days</p>
                      </div>
                      <div className="houre">
                        <span>12</span>
                        <p>hour</p>
                      </div>
                      <div className="mins">
                        <span>12</span>
                        <p>Mins</p>
                      </div>
                      <div className="secon">
                        <span>12</span>
                        <p>Sec</p>
                      </div>
                    </div>

                    <ProductDetails></ProductDetails>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product_deal">
                  <div>
                    <img src={banner_5} />
                  </div>
                  <div className="pro_deal_details">
                    <div className="deal_time">
                      <div className="days">
                        <span>12</span>
                        <p>Days</p>
                      </div>
                      <div className="houre">
                        <span>12</span>
                        <p>hour</p>
                      </div>
                      <div className="mins">
                        <span>12</span>
                        <p>Mins</p>
                      </div>
                      <div className="secon">
                        <span>12</span>
                        <p>Sec</p>
                      </div>
                    </div>

                    <ProductDetails></ProductDetails>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product_deal">
                  <div>
                    <img src={banner_5} />
                  </div>
                  <div className="pro_deal_details">
                    <div className="deal_time">
                      <div className="days">
                        <span>12</span>
                        <p>Days</p>
                      </div>
                      <div className="houre">
                        <span>12</span>
                        <p>hour</p>
                      </div>
                      <div className="mins">
                        <span>12</span>
                        <p>Mins</p>
                      </div>
                      <div className="secon">
                        <span>12</span>
                        <p>Sec</p>
                      </div>
                    </div>

                    <ProductDetails></ProductDetails>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sections">
        <div className="container-fluid">
          <div className="row">
            <Part></Part>
            <Part></Part>
            <Part></Part>
            <Part></Part>
          </div>
        </div>
      </section>

      <section className="big_banner">
        <div className="container-fluid">
          <Banner
            slider_head={banner_data.head_text}
            slider_text={banner_data.small_text}
            slider_img={banner_data.imag}
            key={banner_data.id}
          ></Banner>
        </div>
      </section>

      <section className="services_section">
        <div className="container-fluid">
          <div className="services">
            <div className="service">
              <img src={icon_1}></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>

            <div className="service">
              <img src={icon_1}></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>

            <div className="service">
              <img src={icon_1}></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>

            <div className="service">
              <img src={icon_1}></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>

            <div className="service">
              <img src={icon_1}></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
