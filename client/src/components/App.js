import Cart from "./Cart";
import ProductList from "./ProductList";
import Form from "./Form";
import { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "../services/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const populatePage = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    populatePage();
  }, []);

  const handleMoreProducts = async (newProduct, callback) => {
    try {
      const response = await addProduct(newProduct);
      setProducts(products.concat(response.data));
      callback();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(
        products.filter((product) => {
          return product._id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProduct = async (editedProduct, callback) => {
    try {
      // Edit product in the database
      const response = await editProduct(editedProduct);
      // Edit product locally
      setProducts(
        products.map((product) => {
          if (product._id === editedProduct._id) {
            return response.data;
          }
          return product;
        })
      );
      // Edit cart locally
      const updatedCart = cart.map((item) => {
        if (item._id === editedProduct._id) {
          return { ...item, price: editedProduct.price };
        }
        return item;
      });
      setCart(updatedCart);
      callback();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCart = async (product) => {
    let itemExistsInCart = false;
    const newCarts = cart.map((item) => {
      if (item._id === product._id) {
        itemExistsInCart = true;
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    if (!itemExistsInCart) {
      newCarts.push({ ...product, quantity: 1 });
    }
    await handleEditProduct({ ...product, quantity: product.quantity - 1 });
    setCart(newCarts);
  };

  return (
    <div id="app">
      <header>
        <Cart cart={cart} />
      </header>
      <main>
        <ProductList
          products={products}
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
          onUpdateCart={handleUpdateCart}
        />
        <Form onSubmit={handleMoreProducts} />
      </main>
    </div>
  );
};

//   return e("div", { className: "app" }, [
//     e("header", null, [
//       e("h1", null, "The Shop!"),
//       e("div", { className: "cart" }, [
//         e("h2", null, "Your Cart"),
//         e("p", null, "Your cart is empty"),
//         e("p", null, "Total: $0"),
//         e("a", { className: "button checkout disabled" }, "Checkout"),
//       ]),
//     ]),
//     e("main", null, [
//       /*e(
//         "div",
//         { className: "product-listing" },
//         e("h2", null, "Products"),
//         products.map(({ title, price, quantity, disabled }) =>
//           product({ title, price, quantity, disabled })
//         )
//       ),*/
//     ]),
//     e("div", { className: "add-form" }, [
//       e("p", null, [
//         e("a", { className: "button add-product-button" }, "Add A Product"),
//       ]),
//       e("h3", null, "Add Product"),
//       e(
//         "form",
//         null,
//         inputs
//           .map(({ label, value }) => input({ label, value }))
//           .push(
//             e("div", { className: "actions form-actions" }, [
//               e("a", { className: "button" }, "Add"),
//               e("a", { className: "button" }, "Cancel"),
//             ])
//           )
//       ),
//     ]),
//   ]);
// };

export default App;
