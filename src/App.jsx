import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavMenu from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      {/* <NavMenu /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
