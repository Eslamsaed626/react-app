import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Product-details.css";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <>
      <div className="product_details">
        <p>snaks</p>
        <h6>
          <Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link>
        </h6>
        <div className="raite">
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <span>(4.0)</span>
        </div>
        <div>
          <p>
            By <span>NestFood</span>
          </p>
        </div>
        <div className="product_footer">
          <div>
            <span>$28.25</span>
          </div>
          <button>Add</button>
        </div>
      </div>
    </>
  );
}
