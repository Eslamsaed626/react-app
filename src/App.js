import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/user/navbar/Navbar";
import Footer from "./components/user/footer/Footer";
import Home from "./pages/user/home/Home";
import About from "./pages/user/about/About";
import Shop from "./pages/user/shop/Shop";
import Cart from "./pages/user/cart/Cart";
import WishList from "./pages/user/wishlist/WishList";
import Vendors from "./pages/user/vendors/Vendors";
import Blog from "./pages/user/blog/Blog";
function App() {
  return (
    <>
      {/* <FontAwesomeIcon icon={faHouse} /> */}
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {/* <Route path="home" element={<Home></Home>}></Route> */}
          <Route path="about" element={<About></About>}></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="vendors" element={<Vendors></Vendors>}></Route>
          <Route path="blog" element={<Blog></Blog>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="wishlist" element={<WishList></WishList>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
