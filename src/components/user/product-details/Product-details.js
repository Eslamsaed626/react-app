import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Product-details.css";
import { Link } from "react-router-dom";

export default function ProductDetails({ data }) {
  let rate = [data && data.rate ? data.rate : 0];


  return (
    <>
      <div className="product_details">
        <p>{data && data.category_name}</p>
        <h6>
          <Link>{data && data.title}</Link>
        </h6>
        <div className="raite">

          {Array(rate).map(e => (

            <FontAwesomeIcon icon={faStar} className="star" key={e} />
          ))}

          <span>{rate}</span>
        </div>
        <div>
          <p>
            By <span>{data && data.by}</span>
          </p>
        </div>
        <div className="product_footer">
          <div>
            {data.salePrice && <span>${data.salePrice}</span>}
            <span className={data.salePrice ? "price" : ""}>${data && data.price}</span>
          </div>
          <button>Add</button>
        </div>
      </div >
    </>
  );
}
