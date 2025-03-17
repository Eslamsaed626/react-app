// import banner_6 from "../../../assets/images/banners/banner-9-min.png";
import "./Banner.css";
export default function Banner({ slider_head, slider_text, slider_img }) {
  return (
    <>
      <div className="banner">
        <img src={slider_img}></img>
        <div className="banner_details">
          <h2>{slider_head}</h2>
          <span>{slider_text}</span>
          <div className="banner_input">
            <input type="text" placeholder="Your email address"></input>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}
