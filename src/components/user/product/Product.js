import "./Product.css";

import { Link } from "react-router-dom";
import ProductDetails from "../product-details/Product-details";

function Product({ product }) {
  console.log(product);

  return (
    <>
      {/* <div className={`pop_product ${tage}`} style={{ width: pro_width + "%" }}>
        <div className="prduct_img">
          <Link>
            <img src={product.product_image} alt="eslam" />
          </Link>
          <span>hot</span>
        </div>

        <ProductDetails></ProductDetails>
      </div> */}
    </>
  );
}

export default Product;
