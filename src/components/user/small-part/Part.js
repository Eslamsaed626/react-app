import "./Part.css";
import Product from "../product/Product";

export default function Part({ type, product }) {
  let productPart = [];

  if (type == "Top Selling") {
    productPart = product.filter((ele) => {
      return ele.top_selling;
    });
  } else if (type == "Trending Products") {
    productPart = product.filter((ele) => {
      return ele.trending;
    });
  } else if (type == "Top Rated") {
    productPart = product.filter((ele) => {
      return ele.rate >= 4;
    });
  } else if (type == "Recently added") {
    productPart = product.filter((ele) => {
      return ele.recently;
    });
  }

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
              {productPart.map((product) => (
                <Product data={product}></Product>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
