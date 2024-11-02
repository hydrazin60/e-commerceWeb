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
import CheckAuth from "./components/common/CheckAuth";
import UnAuthPage from "./pages/unAuthPage";
export default function App() {
  const isAuthenticated = true;
  const user = {
    name: "John Doe",
    email: "Z5i2z@example.com",
    role: "user",
  };
  return (
    <BrowserRouter>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Authlayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Adminlayaout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="product" element={<AdminProduct />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Shoppinglayaout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppinListing />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
            <Route path="account" element={<UserAccount />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/unAuthrized" element={<UnAuthPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
