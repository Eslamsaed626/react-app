import "./Product.css";

import { Link } from "react-router-dom";
import ProductDetails from "../product-details/Product-details";

function Product({ data, pro_width }) {
  // console.log(data);

  // let { id, category_name, title, by, rate, price, salePrice, tage, offer, product_image, populer, pest_seal } = data


  return (
    <>
      <div className={`pop_product ${data && data.tage}`} style={{ width: pro_width + "%" }}>
        <div className="prduct_img">
          <Link>
            <img src={data && data.product_image} alt="eslam" />
          </Link>
          <span>{data && data.tage}</span>
        </div>

        <ProductDetails></ProductDetails>
      </div>
    </>
  );
}

export default Product;
