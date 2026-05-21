// import React, { useState } from "react";
// import Products from "./Products";
// import CartDrawer from "./CartDrawer";

// const Shop = () => {
//   // Cart State
//   const [cartItems, setCartItems] = useState([]);

//   // Add To Cart Function
//   const addToCart = (product) => {
//     const existingProduct = cartItems.find(
//       (item) => item.title === product.title
//     );

//     // Agar product already cart me hai
//     if (existingProduct) {
//       const updatedCart = cartItems.map((item) =>
//         item.title === product.title
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );

//       setCartItems(updatedCart);
//     } else {
//       // New Product
//       setCartItems([
//         ...cartItems,
//         {
//           ...product,
//           quantity: 1,
//         },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Cart Icon */}
//       <div className="fixed top-5 right-5 z-50">
//         <CartDrawer cartItems={cartItems} />
//       </div>

//       {/* Products */}
//       <Products addToCart={addToCart} />
//     </>
//   );
// };

// export default Shop;