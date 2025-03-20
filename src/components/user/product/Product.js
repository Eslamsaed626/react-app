import "./Product.css";

import { Link } from "react-router-dom";
import ProductDetails from "../product-details/Product-details";

function Product({ data, pro_width }) {
  // console.log();

  function hoverFun() {
    console.log("eslam");

  }


  return (
    <>
      <div className={`pop_product ${data && data.tage}`} style={{ width: pro_width + "%" }} onHover={hoverFun}>

        <div className="prduct_img">
          <Link>
            <img src={data && data.product_image} alt="eslam" />
          </Link>
          <span>{data && data.tage}</span>
        </div>

        <ProductDetails data={data}></ProductDetails>
      </div>
    </>
  );
}

export default Product;
