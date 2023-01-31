import Header from "./Header";
import ProductList from "./ProductList";
import Form from "./Form";

const App = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <ProductList />
        <Form />
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
