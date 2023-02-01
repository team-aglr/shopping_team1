import data from "../mockData/data";
import Product from "./Product";

function ProductList({products, onDelete}) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <Product {...product} key={product._id} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProductList;
