import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
  const [popouler_item, setPopulerItem] = useState(0);
  let parts_text = [
    "Top Selling",
    "Trending Products",
    "Recently added",
    "Top Rated",
  ];

  let populer_list = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];

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
              {populer_list.map((item, index) => (
                <li
                  onClick={() => setPopulerItem(index)}
                  className={popouler_item === index ? "active" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="populer_products">
            {allProducts.map((product) => (
              <Product data={product} pro_width={19} key={product.id}></Product>
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
                  <ProSlider allProduct={allProducts}></ProSlider>
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
              {allProducts.map(
                (product) =>
                  product.deal_time && (
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

                          <ProductDetails data={product}></ProductDetails>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sections">
        <div className="container-fluid">
          <div className="row">
            {parts_text.map((part) => (
              <Part product={allProducts} type={part}></Part>
            ))}
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
