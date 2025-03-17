import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProSlider from "../../../components/user/slider/Slider";
import "./Home.css";
import Product from "../../../components/user/product/Product";
import ProductDetails from "../../../components/user/product-details/Product-details";
import Part from "../../../components/user/small-part/Part";
import Banner from "../../../components/user/banner/Banner";
import HeadSlider from "../../../components/user/head_slider/HeadSlider";
import Featured from "../../../components/user/featured/Featured";
export default function Homes() {
  const [banner_data, setBannerData] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  // let products = [
  //   {
  //     "id": 1,
  //     "category_name": "Baking material",
  //     "title": "Foster Farms Takeout Crispy Classic",
  //     "by": "Country Crock",
  //     "rate": 2,
  //     "price": 12,
  //     "salePrice": 10,
  //     "tage": "over",
  //     "offer": "19%",
  //     "product_image": "images/product/product-1-1.jpg",
  //     "populer": "populer",
  //     "pest_seal": "best_seal"
  //   },
  //   {
  //     "id": 2,
  //     "category_name": "Baking material",
  //     "title": "Foster Farms Takeout Crispy Classic",
  //     "by": "Country Crock",
  //     "rate": 2,
  //     "price": 12,
  //     "salePrice": 10,
  //     "tage": "sale",
  //     "offer": "19%",
  //     "product_image": "images/product/product-2-1.jpg",
  //     "populer": "populer",
  //     "pest_seal": "best_seal"
  //   },
  //   {
  //     "id": 3,
  //     "category_name": "Baking material",
  //     "title": "Foster Farms Takeout Crispy Classic",
  //     "by": "Country Crock",
  //     "rate": 2,
  //     "price": 12,
  //     "salePrice": 10,
  //     "tage": "sale",
  //     "offer": "19%",
  //     "product_image": "images/product/product-3-1.jpg",
  //     "populer": "populer",
  //     "pest_seal": "best_seal"
  //   }
  // ]
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

  // get all product
  useEffect(() => {
    fetch(
      fetch("http://localhost:4000/products")
        .then((res) => res.json())
        .then((data) => {

          setAllProducts(() => data);
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

          <Featured></Featured>

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
              // console.log(product.tage)

              <Product data={product} pro_width={19}></Product>

            ))}
          </div>
        </div >
      </section >

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
                    <img src="/images/banners/banner-5.png" />
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
                    <img src="/images/banners/banner-5.png" />
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
                    <img src="/images/banners/banner-5.png" />
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
                    <img src="/images/banners/banner-5.png" />
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
              <img src="images/services_img/icon-1.png"></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>

            <div className="service">
              <img src="images/services_img/icon-1.png"></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>

            <div className="service">
              <img src="images/services_img/icon-1.png"></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>

            <div className="service">
              <img src="images/services_img/icon-1.png"></img>
              <div>
                <h5>Best prices & offers</h5>
                <p>Orders $50 or more</p>
              </div>
            </div>

            <div className="service">
              <img src="images/services_img/icon-1.png"></img>
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
