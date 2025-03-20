import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Featured.css";
export default function Featured() {
  const [allFeatured, setAllFeatured] = useState([]);
  const [allFeatured_banner, setAllFeaturedBanner] = useState([]);
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
  useEffect(() => {
    fetch(
      fetch("http://localhost:4000/featured_banner")
        .then((res) => res.json())
        .then((data) => {
          setAllFeaturedBanner(data);
        })
    );
  }, []);

  return (
    <>
      <div className="featured_items">
        {allFeatured.map((ele, index) => (
          <div className={`featured_item fet-${index + 1}`} key={ele.id}>
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
            <div className="col-md-4" key={ele.id}>
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
    </>
  );
}
