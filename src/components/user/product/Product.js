import "./Product.css";

import { Link } from "react-router-dom";
import ProductDetails from "../product-details/Product-details";
import { useState } from "react";

function Product({ data, pro_width }) {

  // const [mouseOverProduct, setMouseOverProduct] = useState(false)
  // console.log();

  // function hoverFun() {
  //   setMouseOverProduct(true)

  // }


  return (
    <>
      <div className={`pop_product ${data && data.tage}`} style={{ width: pro_width + "%" }} >

        <div className="prduct_img">
          <Link>
            <img src={data && data.product_image} alt="eslam" />
            <img src={data && data.product_image_2} alt="eslam" />
          </Link>
          <span>{data && data.tage}</span>
        </div>

        <ProductDetails data={data}></ProductDetails>
      </div>
    </>
  );
}

export default Product;
