// import ProductDetails from "../product-details/Product-details";
import "./Part.css";
// import small_1 from "../../../assets/images/featured/product-8-1.jpg";
import Product from "../product/Product";

export default function Part({ type, product }) {
  // console.log(type);


  return (
    <>
      <div className="col-md-3">
        <div className="part">
          <div>
            <h4>{type}</h4>
            <span></span>
          </div>
          <div className="products_part">
            <div className="small_product">
              {product.map(pro => (
                // console.log(type)

                pro[type] &&
                <Product data={pro}></Product>
              ))}


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
