import data from "../mockData/data";
import Product from "./Product";

function ProductList() {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {data.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
