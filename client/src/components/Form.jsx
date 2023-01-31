import { useState } from "react";

function Form() {
  const [isVisible, setisVisible] = useState(false);

  return (
    <div className="add-form">
      <p>
        <a
          className="button add-product-button"
          onClick={() => setisVisible(true)}
        >
          Add a Product
        </a>
      </p>
      <h3>Add a product</h3>
      <form style={{ display: `${isVisible ? "block" : "hidden"}` }}>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name"></input>
        </div>
        <div className="input-group">
          <label for="product-price">Product Name</label>
          <input type="text" id="product-price"></input>
        </div>
        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity"></input>
        </div>
        <div className="actions form-actions">
          <a className="button">add</a>
          <a className="button">cancel</a>
        </div>
      </form>
    </div>
  );
}

export default Form;
