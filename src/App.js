import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import Dashboard from "./Layout/Dashboard/Dashboard";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import OrdersList from "./pages/OrdersList";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./pages/PlaceOrder";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/home" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders-list" element={<OrdersList />} />
              <Route path="/place-order" element={<PlaceOrder />} />
            </Route>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
