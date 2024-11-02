import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Adminlayaout from "./components/adminView/layaout";
import AdminDashboard from "./pages/AdminView/Dashboard";
import AdminProduct from "./pages/AdminView/Product";
import AdminOrders from "./pages/AdminView/Orders";
import AdminFeatures from "./pages/AdminView/Features";
import Shoppinglayaout from "./components/shoppingView/layaout";
import NotFound from "./pages/notFound";
import ShoppingHome from "./pages/shopping/Home";
import ShoppinListing from "./pages/shopping/Listing";
import ShoppingCheckout from "./pages/shopping/Checkout";
import UserAccount from "./pages/shopping/Account";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/auth" element={<Authlayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/admin" element={<Adminlayaout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="product" element={<AdminProduct />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route path="/shop" element={<Shoppinglayaout />}>
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppinListing />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
            <Route path="account" element={<UserAccount />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
