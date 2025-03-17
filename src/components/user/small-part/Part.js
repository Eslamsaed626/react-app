// import ProductDetails from "../product-details/Product-details";
import "./Part.css";
// import small_1 from "../../../assets/images/featured/product-8-1.jpg";
import Product from "../product/Product";

export default function Part() {
  return (
    <>
      <div className="col-md-3">
        <div className="part">
          <div>
            <h4>Top Selling</h4>
            <span></span>
          </div>
          <div className="products_part">
            <div className="small_product">
              <Product></Product>
              <Product></Product>
              <Product></Product>
              {/* <Product></Product> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
