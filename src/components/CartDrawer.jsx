import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IoCart, IoClose } from "react-icons/io5";

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">My Cart</h1>

        <IoClose size={30} onClick={toggleDrawer(false)} />
      </div>
      <Divider />

      <div></div>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <IoCart size={30} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}

// // ! esko remove nhi karna hai ------------
 
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Divider from "@mui/material/Divider";
// import { IoCart, IoClose } from "react-icons/io5";

// export default function CartDrawer() {
//   const [open, setOpen] = React.useState(false);

//   // Cart State
//   const [cartItems, setCartItems] = React.useState([]);

//   // Drawer Toggle
//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   // Add To Cart Function
//   const addToCart = () => {
//     const product = {
//       id: 1,
//       name: "T-Shirt",
//       price: 499,
//     };

//     setCartItems((prev) => [...prev, product]);
//   };

//   return (
//     <div>
//       {/* Cart Icon */}
//       <button onClick={toggleDrawer(true)}>
//         <IoCart size={30} />
//       </button>

//       {/* Example Add To Cart Button */}
//       <button
//         onClick={addToCart}
//         className="bg-black text-white px-4 py-2 rounded ml-4"
//       >
//         Add To Cart
//       </button>

//       {/* Drawer */}
//       <Drawer
//         open={open}
//         onClose={toggleDrawer(false)}
//         anchor="right"
//       >
//         <Box sx={{ width: 400 }} role="presentation">
          
//           {/* Header */}
//           <div className="p-4 flex justify-between items-center">
//             <h1 className="text-3xl font-semibold">
//               My Cart ({cartItems.length})
//             </h1>

//             <IoClose
//               size={30}
//               className="cursor-pointer"
//               onClick={toggleDrawer(false)}
//             />
//           </div>

//           <Divider />

//           {/* Cart Items */}
//           <div className="p-4">
//             {cartItems.length === 0 ? (
//               <p>Your cart is empty</p>
//             ) : (
//               cartItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="border p-3 mb-3 rounded"
//                 >
//                   <h2 className="text-xl font-semibold">
//                     {item.name}
//                   </h2>

//                   <p>₹{item.price}</p>
//                 </div>
//               ))
//             )}
//           </div>
//         </Box>
//       </Drawer>
//     </div>
//   );
// }