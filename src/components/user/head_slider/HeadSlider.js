import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeadSlider.css";
import Banner from "../banner/Banner";
import { useEffect, useState } from "react";
export default function HeadSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/banners")
      .then((res) => res.json())
      .then((data) => setSlides(data.slide));
  }, []);

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Banner
            slider_head={slide.head_text}
            slider_text={slide.small_text}
            slider_img={slide.imag}
            key={slide.id}
          ></Banner>
        ))}

        {/* <Banner></Banner> */}
      </Slider>
    </>
  );
}
