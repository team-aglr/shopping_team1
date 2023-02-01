import { useState } from "react";

function Form({onSubmit}) {
  const [isVisible, setisVisible] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      title: name,
      quantity,
      price,
    }, resetInputs);
  };

  const resetInputs = () => {
    setName("");
    setPrice(0);
    setQuantity(0);
  }

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
          <input type="text" id="product-name" value={name} onChange={(e) => {setName(e.target.value)}}></input>
        </div>
        <div className="input-group">
          <label for="product-price">Product Price</label>
          <input type="text" id="product-price" value={price} onChange={(e) => {setPrice(e.target.value)}}></input>
        </div>
        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={(e) => {setQuantity(e.target.value)}}></input>
        </div>
        <div className="actions form-actions">
          <a className="button" onClick={handleSubmit}>add</a>
          <a className="button">cancel</a>
        </div>
      </form>
    </div>
  );
}

export default Form;
